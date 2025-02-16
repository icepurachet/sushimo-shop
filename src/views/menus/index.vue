<template>
<div>
    <div>
        <h1>SUSHIMO</h1>
        <!-- <a class="button">ข้าวปั้น</a>
        <a href="/:tableId/menus/rice" class="button">ข้าวด้ง</a>
        <a href="/:tableId/menus/sashimi" class="button">ซาชิมิ</a>
        <a href="/:tableId/menus/dessert" class="button">ของหวาน</a>
        <a href="/:tableId/menus/drink" class="button">เครื่องดื่ม</a> -->
        <span @click="goToSushi()" class="button">ซูชิ</span>
        <span @click="goToRice()" class="button">ข้าวด้ง</span>
        <span @click="goToSashimi()" class="button">ซาชิมิ</span>
        <span @click="goToDessert()" class="button">ของหวาน</span>
        <span @click="goToDrink()" class="button">เครื่องดื่ม</span>
        <!-- <router-link :to="{ name: 'GetMenu', params: { tableId: tableId } }" >
            <span class="button">ข้าวปั้น</span>
        </router-link> -->
    </div>
    <div v-if="open ==  false">
        <table>
        <tr>
            <td>
                <img src="https://2.bp.blogspot.com/-gVZJHs0SmB8/WiOdTBsCLlI/AAAAAAAABJg/LoY8A6xvBTgYtlkt5HScxPQFCmUAJeF0QCLcBGAs/s1600/01.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าปลาแซลมอน</h2>
                <h2>40 THB.</h2>
            </td>
            <td>
                <img src="https://media.timeout.com/images/105909627/750/562/image.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าปลามากุโระ</h2>
                <h2>40 THB.</h2>
            </td>
            <td>
                <img src="https://img.wongnai.com/p/1920x0/2021/06/17/c1df4aa240fa4f1ea96c31731eb8ba19.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าปลาไหลย่างญี่ปุ่น</h2>
                <h2>40 THB.</h2>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2017/04/58ead7e23594f_58ead7a1433b9_1336419714.jpg" height="350px" width="500px">
                <h2>ซูชิหน้ากุ้งผีเสื้อ</h2>
                <h2>30 THB.</h2>
            </td>
            <td>
                <img src="https://chillchilljapan.com/wp-content/uploads/2020/09/shutterstock_547604971-650x513.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าไข่กุ้ง</h2>
                <h2>30 THB.</h2>
            </td>
            <td>
                <img src="https://3.bp.blogspot.com/-zFsXVlu5gqM/V-4S2-x9R8I/AAAAAAAAs0w/KnfBEngtlz4nmN5T_TSfPA58c7QziwftwCLcB/s400/15.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าไข่หวาน</h2>
                <h2>20 THB.</h2>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://2.bp.blogspot.com/-l5A6oQva55Q/V-4S2IUtsWI/AAAAAAAAs0g/--NVzRrSFFkEd5BebgzLuiRNznH6tlOXACLcB/s400/11.jpg" height="350px" width="500px">
                <h2>ซูชิหน้าปูอัด</h2>
                <h2>20 THB.</h2>
            </td>
            <td>
                <img src="https://chillchilljapan.com/wp-content/uploads/2020/09/shutterstock_27348049.jpg" height="350px" width="500px">
                <h2>ซูชิโรล</h2>
                <h2>40 THB.</h2>
            </td>
        </tr>
    </table>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            tableId: this.$route.params.tableId,
            open: false
        }
    },
    methods: {
        goToSushi () {
            this.$router.push({ name: 'GetMenu', params: { tableId: this.tableId } })
        },
        goToRice () {
            this.$router.push({ name: 'RiceMenu', params: { tableId: this.tableId } })
        },
        goToSashimi () {
            this.$router.push({ name: 'SashimiMenu', params: { tableId: this.tableId } })
        },
        goToDessert () {
            this.$router.push({ name: 'Dessert', params: { tableId: this.tableId } })
        },
        goToDrink () {
            this.$router.push({ name: 'DrinkMenu', params: { tableId: this.tableId } })
        }
    }
}
</script>
