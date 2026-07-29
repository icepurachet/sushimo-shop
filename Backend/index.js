const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bcrypt = require('bcryptjs');  // ใช้ bcryptjs สำหรับการตรวจสอบรหัสผ่าน
const app = express()
const port = 8080


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost', // ip or localhost 
  port: 3306,
  user: 'root', // username mysql
  password: 'ณแำุึภตภค', // password mysql
  database: 'sushimo' // select database that you wanted
})

connection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });

app.get('/menus', (req, res) => {
    connection.query('SELECT * FROM menus', (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result)
    })
  });

app.get('/' , (req, res) => {
    res.send("Djaaaa")

});

app.get('/users', (req,res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result)
  })
})


app.get('/types', (req,res) => {
  connection.query('SELECT * FROM types', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result)
  })
})

app.get('/customers', (req, res) => {
  connection.query('SELECT * FROM customers', (err, result) => {
    if(err) {
      throw err;
    }
    res.json(result)
  })
})

app.get('/payments', (req,res) => {
  connection.query('SELECT * FROM payments', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result)
  })
})

app.get('/carts', (req,res) => {
  connection.query('SELECT * FROM carts', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result)
  })
})

app.get('/typesMenus', (req, res) => {
  connection.query('SELECT menus.id, menus.name, menus.price, menus.picture, types.name AS type_name FROM menus JOIN types on menus.types_id = types_id', 
    (err, result) => {
      if (err) {
        throw err;  
      }
      res.json(result);
  })
})

app.get('/receipt', (req, res) => {
  connection.query(`
    select p.id, m.name, m.price as 'price_per_unit', c.amount, c.price, p.price as 'total_price' 
    from menus m
    join carts c on m.id = c.menus_id 
    join payments p on c.payments_id = p.id `, 
    (err, result) => {
      if (err) {
        throw err
      }
      res.json(result)
  })
})

app.get('/menus/:id', (req, res) => {
  const menuId = req.params.id
  const sql = 'SELECT * from menus where id = ?'
  const values = [menuId]
  connection.query(sql, values, (err, result) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/types/:id', (req, res) => {
  const typeId = req.params.id
  const sql = 'SELECT * from types where id = ?'
  const values = [typeId]
  connection.query(sql, values, (err, result) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id
  const sql = 'SELECT * from users where id = ?'
  const values = [userId]
  connection.query(sql, values, (err, result) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/menus/type/:types', (req, res) => {
  const types = req.params.types

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
  `

  const values = [types]

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: err.message })
    }

    res.json(result)
  })
})

app.get('/members', (req, res) => {
  connection.query('SELECT * FROM members', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result)
  })
})
// app.get('/displayMenus', (req, res) => {
//   connection.query('SELECT * FROM menus', (err,result) => {
//     if (err) {
//       throw err;
//     }
//   })
// })

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE name = ? and password = ?';
  const values = [req.body.userName, req.body.password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Database error', error: err });
    }

    if (result.length > 0) {
      // หากพบผู้ใช้ในฐานข้อมูล
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // หากไม่พบผู้ใช้
      res.status(400).json({ success: false, message: 'Username หรือ Password ไม่ถูกต้อง' });
    }
  });
});

//   const { username, password } = req.body;  // ดึงข้อมูลชื่อผู้ใช้และรหัสผ่านจาก request
  
//   const sql = 'SELECT * FROM users WHERE name = ?';  // ตรวจสอบว่ามีผู้ใช้ที่ชื่อเหมือนที่กรอกหรือไม่
//   const values = [username];
  
//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       return res.status(500).json({ status: 500, message: 'Database error', error: err });  // ถ้ามีปัญหากับฐานข้อมูล
//     }

//     if (result.length > 0) {
//       const user = result[0];  // ถ้าพบผู้ใช้ที่ชื่อเดียวกันในฐานข้อมูล
//       bcrypt.compare(password, user.password, (err, isMatch) => {  // เปรียบเทียบรหัสผ่านที่ผู้ใช้กรอกกับรหัสผ่านที่เข้ารหัสในฐานข้อมูล
//         if (err) {
//           return res.status(500).json({ status: 500, message: 'Error comparing passwords', error: err });
//         }
        
//         if (isMatch) {
//           // ถ้ารหัสผ่านตรงกัน
//           res.status(200).json({ status: 200, message: 'Login successful' });
//         } else {
//           // ถ้ารหัสผ่านไม่ตรงกัน
//           res.status(400).json({ status: 400, message: 'Invalid username or password' });
//         }
//       });
//     } else {
//       // ถ้าไม่พบชื่อผู้ใช้ในฐานข้อมูล
//       res.status(400).json({ status: 400, message: 'User not found' });
//     }
//   });
// });

app.post('/menus', (req, res) => {
  const checkSql = 'SELECT id FROM types WHERE id = ?';
  const values = [req.body.typeId];
  connection.query(checkSql, values, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: 'Database error', error: err });

    if (result.length > 0) {  // ถ้า typeId มีอยู่ในฐานข้อมูล
      // ดึงค่า menuId ล่าสุด
      const getLastMenuIdSql = 'SELECT MAX(id) AS lastMenuId FROM menus';
      connection.query(getLastMenuIdSql, (err, result) => {
        if (err) return res.status(500).json({ status: 500, message: 'Database error while fetching last menuId', error: err });

        const lastMenuId = result[0].lastMenuId || 0; // ถ้ายังไม่มีข้อมูล ให้เริ่มจาก 0
        const newMenuId = lastMenuId + 1;

        // เพิ่มข้อมูลเมนูใหม่
        const sql = 'INSERT INTO menus (id, name, price, types_id, picture) VALUES (?, ?, ?, ?, ?)';
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

// app.post('/customers', (req, res) => {
//   const getLascustomerIdSql = 'SELECT MAX(customerId) AS lastCustomerId FROM customers'; 
//   connection.query(getLascustomerIdSql, (err, result) => {
//     const newCustomerId = result[0].lastCustomerId ? result[0].lastCustomerId + 1 : 1;
//     const sql = 'INSERT INTO customers values (?, ?, ?)'
//     const values = [newCustomerId, req.body.name, req.body.tel]
//     connection.query(sql, values, (err) => {
//       if (err) {
//         return res.status(500).json({ status: 500, message: 'Database error', error: err });
//       }
//       res.status(201).json({ status: 201, message: 'Customer added successfully' });
//     });
//   })
// })

  
  // const checkSql = 'SELECT id from types where id = ?'
  // const values = [req.body.typeId]
  // connection.query(sql, values, (err, result) => {
  //   if (id == typeId) {
  //     if (result.length > 0) {  // ถ้า typeId มีอยู่ในฐานข้อมูล
  //       // หาค่า menuId ล่าสุดจากตาราง menus
  //       const getLastMenuIdSql = 'SELECT MAX(menuId) AS lastMenuId FROM menus'}
  //     // how to get last id of menu for increase menu id
  //     // menuId = last + 1
  //     const sql = 'INSERT INTO menus VALUES (?, ?, ?, ?, ?)'
  //     const value = [req.body.getLastMenuIdSql, req.body.menuName, req.body.menuPrice, req.body.typeId, req.body.menuPicture]
  //   } else {
  //     res.status(500).json({ status: 500, message: 'dbs error' })
  //   }
  // })
    
  // const sql = `INSERT INTO menus VALUES (?, ?, ?, ?, ?)`
  // const values = [req.body.id, req.body.name, req.body.price, req.body.type_id, req.body.picture]

  // connection.query(sql, values, (err) => {
  //   if (err) {
  //     console.error(err)
  //     return res.status(500).json({ status: 500, message: 'dbs error' })
  //   }
  //   res.status(201).json({ status: 201, massage: 'created success' })
  // })


// app.post('/users', (req,res) => {})
//   
//   const sql = 'INSERT INTO users VALUES (?, ?, ?)'
//   const values = [req.body.id, req.body.name, req.body.password]
//   connection.query(sql, values, (err) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).json({ status: 500, message: 'dbs error' })
//     }
//     res.status(201).json({ status: 201, massage: 'created success' })
//   })
// })

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
    const sql = 'INSERT INTO types (id, name) VALUES (?, ?)';
    const values = [newId, req.body.typeName];
    connection.query(sql, values, (err) => {
      if (err) {
        return res.status(500).json({ status: 500, message: 'Database error', error: err });
      }
      res.status(201).json({ status: 201, message: 'Type added successfully' });
    });
  });
});

// app.post('/payments', (req,res) => {
//   // id price member_id -> payment
//   // menu_id payment_id amount price -> cart

//   // menus: [{ menu_id, amount, price}],
//   // totalPrice: 10000,
//   // phone: '0988888'

//   const sqlCheckPayment = 'select * from payments'
//   connection.query(sqlCheckPayment, (err, result) => {
//     if (err) {
//       return res.status(500).json({ msg: 'error', msgError: err })
//     } 
//         const sqlMaxPaymentId = 'SELECT MAX(id) AS lastPaymentId FROM payments'
//         connection.query(sqlMaxPaymentId, (errorLastPaymentId, resultLastPaymentId) => {
//           if (errorLastPaymentId) {
//             return res.status(500).json({ msg: 'error', msgError: errorLastPaymentId })
//           }
//           const idPayment = resultLastPaymentId.length > 0 ? resultLastPaymentId[0].lastPaymentId + 1 : 1

//           const sqlMemberPhone = 'select * from members where phone = ?'
//           const valueMember = [req.body.phone]
//           connection.query(sqlMemberPhone, valueMember, (errMember, resultMember) => {
//             if (errMember) {
//               return res.status(500).json({ msg: 'error', msgError: errMember })
//             }
            
//             const idMember = resultMember.length > 0 ? resultMember[0].id : null
//             const sqlPayment = 'insert into payments values (?, ?, ?)'
//             const valuePayment = [idPayment, req.body.totalPrice, idMember]
//             connection.query(sqlPayment, valuePayment, (errPayment) => {
//               if (errPayment) {
//                 return res.status(500).json({ msg: 'error', msgError: errorLastPaymentId })
//               }

//               const sqlCart = 'insert into carts (payment_id, menu_id, amount, price) values ?'
//               const valuesCart = req.body.menus.map((menu) => {
//                 return [ idPayment, menu.menu_id, menu.amount, menu.price ]
//               })

//               connection.query(sqlCart, valuesCart, (errCart) => {
//                 if (errCart) {
//                   return res.status(500).json({ msg: 'error', msgError: errorLastPaymentId })
//                 }

//                 res.status(201).json({ msg: 'success' })
//               })
//             })
//           })
//         })
      
//   })
// })

app.post('/payments', (req, res) => {
  const { carts, totalPrice, phone } = req.body;

  // หา id ใหม่สำหรับ payment
  const sqlMaxPaymentId = 'SELECT MAX(id) AS lastPaymentId FROM payments';
  connection.query(sqlMaxPaymentId, (errorLastPaymentId, resultLastPaymentId) => {
    if (errorLastPaymentId) {
      return res.status(500).json({ msg: 'error', msgError: errorLastPaymentId });
    }

    const idPayment = resultLastPaymentId[0].lastPaymentId ? resultLastPaymentId[0].lastPaymentId + 1 : 1;

    // ถ้ามีเบอร์โทรศัพท์ ให้ค้นหาจากเบอร์โทรศัพท์นั้น
    if (phone) {
      const sqlMemberPhone = 'SELECT id FROM members WHERE phone = ?';
      connection.query(sqlMemberPhone, [phone], (errMember, resultMember) => {
        if (errMember) {
          return res.status(500).json({ msg: 'error', msgError: errMember });
        }

        const membersId = resultMember.length > 0 ? resultMember[0].id : null;

        // ถ้าไม่พบสมาชิก ให้แสดงข้อผิดพลาด
        if (membersId === null) {
          return res.status(400).json({ msg: 'error', msgError: 'ไม่พบสมาชิกที่ตรงกับเบอร์โทรศัพท์' });
        }

        // Insert payment with members_id
        const sqlPayment = 'INSERT INTO payments (id, price, members_id) VALUES (?, ?, ?)';
        const valuePayment = [idPayment, totalPrice, membersId];
        connection.query(sqlPayment, valuePayment, (errPayment) => {
          if (errPayment) {
            return res.status(500).json({ msg: 'error', msgError: errPayment });
          }

          // Insert carts
          const sqlCart = 'INSERT INTO carts (payments_id, menus_id, amount, price) VALUES ?';
          
          // แปลง carts ให้อยู่ในรูปแบบที่เหมาะสม
          const valuesCart = carts.map(cart => [
            idPayment,  // payments_id
            cart.menu_id,  // menus_id
            cart.amount,  // amount
            cart.price  // price
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
      // ถ้าไม่มีเบอร์โทรศัพท์ให้ insert payment โดยไม่เชื่อมโยงกับสมาชิก
      const sqlPayment = 'INSERT INTO payments (id, price) VALUES (?, ?)';
      const valuePayment = [idPayment, totalPrice];
      connection.query(sqlPayment, valuePayment, (errPayment) => {
        if (errPayment) {
          return res.status(500).json({ msg: 'error', msgError: errPayment });
        }

        // Insert carts
        const sqlCart = 'INSERT INTO carts (payments_id, menus_id, amount, price) VALUES ?';

        // แปลง carts ให้อยู่ในรูปแบบที่เหมาะสม
        const valuesCart = carts.map(cart => [
          idPayment,  // payments_id
          cart.menu_id,  // menus_id
          cart.amount,  // amount
          cart.price  // price
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

// app.post('/carts', (req,res) => {
//   const sql = 'INSERT INTO carts VALUES (?, ?, ?, ?)'
//   const values = [req.body.id, req.body.menu_id, req.body.amount, req.body.price]
//   connection.query(sql, values, (err) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).json({ status: 500, message: 'dbs error' })
//     }
//     res.status(201).json({ status: 201, massage: 'created success' })
//   })
// })


app.put('/menus/:id', (req, res) => {
  const id = req.params.id;

  // คำสั่ง SQL สำหรับอัปเดตเมนู
  const sql = 'UPDATE menus SET name = ?, price = ?, types_id = ?, picture = ? WHERE id = ?';

  // ค่าที่ส่งมาจาก Frontend
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
  const id = req.params.id
  const sql = 'UPDATE users SET name = ?, password = ? WHERE id = ?'
  const values = [req.body.userName, req.body.password, id]
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, massage: 'OK' })
  })
})

app.put('/types/:id', (req, res) => {
  const id = req.params.id
  const sql = 'UPDATE types SET name = ? WHERE id = ?'
  const values = [req.body.typeName, id]
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, massage: 'OK' })
  })
})

// app.put('/payments/:id', (req, res) => {
//   const id = req.params.id
//   const sql = 'UPDATE payments SET price = ? WHERE id = ?'
//   const values = [req.body.price, id]
//   connection.query(sql, values, (err) => {
//     if (err) {
//       console.error(err)
//       return res.status(500).json({ status: 500, message: 'dbs error' })
//     }
//     res.status(200).json({ status: 200, massage: 'OK' })
//   })
// })

app.put('/carts/:id', (req, res) => {
  const id = req.params.id
  const sql = 'UPDATE carts SET menus_id = ?, amount = ?, price = ?  WHERE payments_id = ?'
  const values = [req.body.menus_id, req.body.amount, req.body.price, id]
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, massage: 'OK' })
  })
})

app.put('/members/:id', (req, res) => {
  const id = req.params.id
  const sql = 'UPDATE members SET name = ?, phone = ? where id = ?'
  const values = [req.body.name, req.body.phone, id]
  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, massage: 'OK' })
  })
})


app.delete('/menus/:id', (req, res) => {
  const id = req.params.id
  const sql = 'DELETE FROM menus WHERE id = ?'
  const values = [id]

  connection.query(sql, values, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, massage: 'OK' })
  })
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  const sql = 'DELETE FROM users WHERE id = ?'
  const values = [id]

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, message: 'OK' })
  })
})

app.delete('/types/:id', (req, res) => {
  const id = req.params.id
  const sql = 'DELETE FROM types WHERE id = ?'
  const values = [id]

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, message: 'OK' })
  })
})

app.delete('/members/:id', (req, res) => {
  const id = req.params.id
  const sql = 'DELETE FROM members WHERE id = ?'
  const values = [id]
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ status: 500, message: 'dbs error' })
    }
    res.status(200).json({ status: 200, message: 'OK' })
  })
})

app.listen(port, () => {
  console.log("Open laew");
  
});


