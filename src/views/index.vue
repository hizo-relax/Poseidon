<template>
    <div class="index-container">
        <div class="header-container">
            <header>
                <h1 class="logo" @click="$router.push('/home')">
                    Poseidon
                </h1>
                <!-- <div class="search-input">
                    <input
                        type="text"
                        placeholder="按回车搜索文章"
                        :value="$route.query.search"
                        @keydown.enter="search"
                    />
                </div> -->
                <!-- <img class="avatar" src="avatar.png" alt="avatar"> -->
            </header>
        </div>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>

export default {
    name: 'IndexPage',
    data() {
        return {};
    },
    methods: {
        search(event) {
            const searchValue = event.target.value;
            if (searchValue) {
                this.$router.push(`/home?search=${searchValue}`);
            } else {
                this.$router.push(`/home`);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.index-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 70px auto;
    row-gap: 10px;
}

.header-container {
    background: #fff;
    box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);

    header {
        width: 80%;
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        margin: 0;
        cursor: pointer;
        text-align: left;
    }

    .search-input {
        flex: 1;
        text-align: right;
        padding-right: 30px;

        input {
            width: 300px;
            height: 34px;
            font-size: 14px;
            background: #f5f6f7;
            border-radius: 4px;
            border: none;
            outline: none;
            padding-left: 10px;
        }
    }

    .avatar {
        border: 1px solid gray;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
}

.main {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    overflow: auto;
    background: #fff;
    border-radius: 4px;
}
</style>>
