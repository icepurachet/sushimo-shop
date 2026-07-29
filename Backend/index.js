const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ตั้งค่าการเชื่อมต่อ Database รองรับทั้ง Local และ Cloud (Aiven)
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'ณแำุึภตภค',
  database: process.env.DB_NAME || 'sushimo',
  // เปิดใช้ SSL เมื่อทำการ Deploy ขึ้น Cloud (Aiven)
  ssl: process.env.DB_HOST ? { rejectUnauthorized: false } : false
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});

app.get('/menus', (req, res) => {
  connection.query('SELECT * FROM menus', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/', (req, res) => {
  res.send('Djaaaa');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/types', (req, res) => {
  connection.query('SELECT * FROM types', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/customers', (req, res) => {
  connection.query('SELECT * FROM customers', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/payments', (req, res) => {
  connection.query('SELECT * FROM payments', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/carts', (req, res) => {
  connection.query('SELECT * FROM carts', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/typesMenus', (req, res) => {
  connection.query(
    'SELECT menus.id, menus.name, menus.price, menus.image, types.name AS type_name FROM menus JOIN types on menus.type_id = types.id',
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    }
  );
});

app.get('/receipt', (req, res) => {
  connection.query(
    `select p.id, m.name, m.price as 'price_per_unit', c.quantity, c.price, p.total as 'total_price' 
     from menus m
     join carts c on m.id = c.menu_id 
     join payments p on c.id = p.id`,
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    }
  );
});

app.get('/menus/:id', (req, res) => {
  const menuId = req.params.id;
  const sql = 'SELECT * from menus where id = ?';
  const values = [menuId];
  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/types/:id', (req, res) => {
  const typeId = req.params.id;
  const sql = 'SELECT * from types where id = ?';
  const values = [typeId];
  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * from users where id = ?';
  const values = [userId];
  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.get('/menus/type/:types', (req, res) => {
  const types = req.params.types;

  const sql = `
    SELECT
      m.id,
      m.name,
      m.price,
      m.image,
      t.name AS type_name
    FROM menus m
    JOIN types t ON m.type_id = t.id
    WHERE t.name = ?
  `;

  const values = [types];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }

    res.json(result);
  });
});

app.get('/members', (req, res) => {
  connection.query('SELECT * FROM members', (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE name = ? and password = ?';
  const values = [req.body.userName, req.body.password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Database error', error: err });
    }

    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(400).json({ success: false, message: 'Username หรือ Password ไม่ถูกต้อง' });
    }
  });
});

app.post('/menus', (req, res) => {
  const checkSql = 'SELECT id FROM types WHERE id = ?';
  const values = [req.body.typeId];
  connection.query(checkSql, values, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: 'Database error', error: err });

    if (result.length > 0) {
      const getLastMenuIdSql = 'SELECT IFNULL(MAX(id), 0) AS lastMenuId FROM menus';
      connection.query(getLastMenuIdSql, (err, result) => {
        if (err) return res.status(500).json({ status: 500, message: 'Database error while fetching last menuId', error: err });

        const lastMenuId = result[0].lastMenuId || 0;
        const newMenuId = lastMenuId + 1;

        const sql = 'INSERT INTO menus (id, name, price, type_id, image) VALUES (?, ?, ?, ?, ?)';
        const values = [newMenuId, req.body.menuName, req.body.menuPrice, req.body.typeId, req.body.menuPicture];

        connection.query(sql, values, (err) => {
          if (err) return res.status(500).json({ status: 500, message: 'Insert failed', error: err });

          res.status(201).json({ status: 201, message: 'Menu added successfully', menuId: newMenuId });
        });
      });
    } else {
      res.status(400).json({ status: 400, message: 'Invalid typeId' });
    }
  });
});

app.post('/users', (req, res) => {
  const getLastId = 'SELECT IFNULL(MAX(id), 0) AS lastId FROM users';
  connection.query(getLastId, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: 'Database error', error: err });
    const newId = result[0].lastId + 1;
    const sql = 'INSERT INTO users (id, name, password) VALUES (?, ?, ?)';
    const values = [newId, req.body.userName, req.body.password];
    connection.query(sql, values, (err) => {
      if (err) {
        return res.status(500).json({ status: 500, message: 'Database error', error: err });
      }
      res.status(201).json({ status: 201, message: 'User added successfully' });
    });
  });
});

app.post('/types', (req, res) => {
  const getLastId = 'SELECT IFNULL(MAX(id), 0) AS lastId FROM types';

  connection.query(getLastId, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: 'Database error', error: err });
    const newId = result[0].lastId + 1;
    const sql = 'INSERT INTO types (id, name, status) VALUES (?, ?, 1)';
    const values = [newId, req.body.typeName];
    connection.query(sql, values, (err) => {
      if (err) {
        return res.status(500).json({ status: 500, message: 'Database error', error: err });
      }
      res.status(201).json({ status: 201, message: 'Type added successfully' });
    });
  });
});

app.post('/payments', (req, res) => {
  const { carts, totalPrice, phone } = req.body;

  const sqlMaxPaymentId = 'SELECT IFNULL(MAX(id), 0) AS lastPaymentId FROM payments';
  connection.query(sqlMaxPaymentId, (errorLastPaymentId, resultLastPaymentId) => {
    if (errorLastPaymentId) {
      return res.status(500).json({ msg: 'error', msgError: errorLastPaymentId });
    }

    const idPayment = resultLastPaymentId[0].lastPaymentId + 1;

    if (phone) {
      const sqlMemberPhone = 'SELECT id FROM members WHERE phone = ?';
      connection.query(sqlMemberPhone, [phone], (errMember, resultMember) => {
        if (errMember) {
          return res.status(500).json({ msg: 'error', msgError: errMember });
        }

        const membersId = resultMember.length > 0 ? resultMember[0].id : null;

        if (membersId === null) {
          return res.status(400).json({ msg: 'error', msgError: 'ไม่พบสมาชิกที่ตรงกับเบอร์โทรศัพท์' });
        }

        const sqlPayment = 'INSERT INTO payments (id, total, user_id) VALUES (?, ?, ?)';
        const valuePayment = [idPayment, totalPrice, membersId];
        connection.query(sqlPayment, valuePayment, (errPayment) => {
          if (errPayment) {
            return res.status(500).json({ msg: 'error', msgError: errPayment });
          }

          const sqlCart = 'INSERT INTO carts (menu_id, quantity, price) VALUES ?';
          const valuesCart = carts.map((cart) => [
            cart.menu_id,
            cart.amount,
            cart.price
          ]);

          connection.query(sqlCart, [valuesCart], (errCart) => {
            if (errCart) {
              return res.status(500).json({ msg: 'error', msgError: errCart });
            }

            res.status(201).json({ msg: 'success' });
          });
        });
      });
    } else {
      const sqlPayment = 'INSERT INTO payments (id, total) VALUES (?, ?)';
      const valuePayment = [idPayment, totalPrice];
      connection.query(sqlPayment, valuePayment, (errPayment) => {
        if (errPayment) {
          return res.status(500).json({ msg: 'error', msgError: errPayment });
        }

        const sqlCart = 'INSERT INTO carts (menu_id, quantity, price) VALUES ?';
        const valuesCart = carts.map((cart) => [
          cart.menu_id,
          cart.amount,
          cart.price
        ]);

        connection.query(sqlCart, [valuesCart], (errCart) => {
          if (errCart) {
            return res.status(500).json({ msg: 'error', msgError: errCart });
          }

          res.status(201).json({ msg: 'success' });
        });
      });
    }
  });
});

app.post('/members', (req, res) => {
  const getLastId = 'SELECT IFNULL(MAX(id), 0) AS lastId FROM members';

  connection.query(getLastId, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: 'Database error', error: err });

    const newId = result[0].lastId + 1;
    const sql = 'INSERT INTO members (id, name, phone) VALUES (?, ?, ?)';
    const values = [newId, req.body.name, req.body.phone];

    connection.query(sql, values, (err) => {
      if (err) {
        return res.status(500).json({ status: 500, message: 'Database error', error: err });
      }
      res.status(201).json({ status: 201, message: 'Member added successfully', id: newId });
    });
  });
});

app.put('/menus/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE menus SET name = ?, price = ?, type_id = ?, image = ? WHERE id = ?';
  const values = [req.body.menuName, req.body.menuPrice, req.body.typeId, req.body.menuPicture, id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'Database error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE users SET name = ?, password = ? WHERE id = ?';
  const values = [req.body.userName, req.body.password, id];
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.put('/types/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE types SET name = ? WHERE id = ?';
  const values = [req.body.typeName, id];
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.put('/carts/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE carts SET menu_id = ?, quantity = ?, price = ? WHERE id = ?';
  const values = [req.body.menus_id, req.body.amount, req.body.price, id];
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.put('/members/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE members SET name = ?, phone = ? where id = ?';
  const values = [req.body.name, req.body.phone, id];
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.delete('/menus/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM menus WHERE id = ?';
  const values = [id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  const values = [id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.delete('/types/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM types WHERE id = ?';
  const values = [id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.delete('/members/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM members WHERE id = ?';
  const values = [id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' });
    }
    res.status(200).json({ status: 200, message: 'OK' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});