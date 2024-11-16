<script lang='ts' setup>
import Jian from "@/assets/info/normal_u125.png"
</script>

<template>
    <div class="w-full h-full flex flex-col  text-center border-2 rounded-sm"
        style="color: white;border-color:  #2cf8f9">
        <div class="text-2xl mx-auto">
            <div class="text">专业社团:机械创新学堂第28期开课</div>
        </div>
        <div class="grow">
            <div class="rounded-lg mx-auto mt-5 px-12"
                style="width: 500px;height: 250px;color: #23fffc;background-color: rgba(255, 255, 255, 0.2) ;line-height: 44px;font-size: 24px">
                <h1>精品课程:人共智能与创新设计第8期开课</h1>
                <h1>公共选修课:老东家与第10期开课</h1>
                <h1>公共选修课:人民兵工精神第12期开课</h1>
                <h1>专业选修课:智能制造技术第15期开课</h1>
            </div>
            <div class="flex flex-row w-full px-24 mt-5">
                <div>
                    <img :src="Jian" width="50" alt="" srcset="">
                </div>
                <div class="grow"></div>
                <div>
                    <h1>智能大师讲坛</h1>
                    <h1>2024年11月11日 图书馆报告厅</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text {
    background: url(@/assets/info/normal_u65.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 50px;
    width: 400px;
    text-align: center;
    line-height: 50px;
}
</style>
