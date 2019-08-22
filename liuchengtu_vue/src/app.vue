<template>
    <div id='root1'>appppp
        <div class="div1">sss</div>
        <img src="@/static/qq.png">
    </div>
</template>
<script>

export default {
    name: 'aaa',
    data: function(){
        return {
            appm: "appppppmmmm"
        }
    }
}
</script>
<style lang="less" scoped>
    #root1{
        background: red;
        z-index: 1;
        position: absolute;
        // background: url('./static/qq.png');
        .div1{
            background: yellow;
        }
    }
</style>