import { reactive } from "vue";

export function useCanyuHook() {
    const options = reactive({
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                // [89.3, 58212, 'Matcha Latte'],
                // [57.1, 78254, 'Milk Tea'],
                [74.4, 41032, '签到'],
                [50.1, 12755, '投票'],
                [89.7, 20145, '问卷调查'],
                [68.1, 79146, '提问'],
                [19.6, 91852, '讨论'],
                [10.6, 101852, '随堂测验'],
                [32.7, 20112, '课件访问']
            ]
        },
        grid: { containLabel: true },
        xAxis: {
            name: '人次',
        },
        yAxis: {
            type: 'category',
            // 字体大小
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 24,    //更改坐标轴文字大小
                    color: '#fff'
                }
            },


        },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#65B581', '#FFCE34', '#FD665F']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                },

            }
        ]
    })

    return {
        options
    }
}