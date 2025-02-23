<template>
    <div>
        <div>
            <h1>SUSHIMO</h1>
            <a href="/:tableId/menus" class="button">ข้าวปั้น</a>
            <a href="/:tableId/menus/rice" class="button">ข้าวด้ง</a>
            <a href="/:tableId/menus/sashimi" class="button">ซาชิมิ</a>
            <a href="/:tableId/menus/dessert" class="button">ของหวาน</a>
            <a href="/:tableId/menus/drink" class="button">เครื่องดื่ม</a>
        </div>
    
        <!-- <div>
            <table>
                <tr>
                <td>
                    <img src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/61/88/8851952350161/8851952350161_1-20230103085108-.jpg" height="400px" width="400px">
                    <h2>น้ำเปล่า</h2>
                    <h2>12 THB.</h2>
                </td>
                <td>
                    <img src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/77/88/8858998571277/8858998571277_2-20240610141651-.jpg" height="400px" width="400px">
                    <h2>เป๊ปซี่</h2>
                    <h2>20 THB.</h2>
                </td>
                <td>
                    <img src="http://www.ladyissue.com/wp-content/uploads/2015/11/DDDD1.jpg" height="400px" width="400px">
                    <h2>น้ำมะนาว</h2>
                    <h2>30 THB.</h2>
                </td>
                <td>
                    <img src="https://png.pngtree.com/png-vector/20240403/ourlarge/pngtree-iced-tea-with-lemon-png-image_12261174.png" height="400px" width="400px">
                    <h2>ชามะนาว</h2>
                    <h2>30 THB.</h2>
                </td>
                </tr> 
                <tr>
                    <td>
                        <img src="https://st.bigc-cs.com/public/media/catalog/product/23/88/8858672700023/8858672700023_3_1.jpg" height="400px" width="400px">
                        <h2>ชาเขียว</h2>
                        <h2>30 THB.</h2>
                    </td>
                    <td>
                        <img src="https://png.pngtree.com/png-clipart/20240731/original/pngtree-putting-ice-cubes-in-empty-glass-on-dark-background-png-image_15668930.png" height="400px" width="400px">
                        <h2>น้ำแข็งเปล่า</h2>
                        <h2>5 THB.</h2>
                    </td>
                </tr>
            </table>
        </div> -->
        <p>{{ count() }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: 'sushi',
            a: 1,
            b: 2,
            c:3
        }
    },
    methods: {
        count () {
            let sum = this.a+this.b
            return sum
        }
    }
}
</script>
