(function () {
  $(document).ready(function () {
    $(".monitor .content").eq(0).show();
    $(".tabs li").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active");
      const _index = $(this).index();
      $(".monitor .content").eq(_index).show().siblings(".content").hide();
    });

    $(".marquee-view .marquee").each(function () {
      const newMarquee = $(this).children().clone();
      $(this).append(newMarquee);
    });
  });
})();

(function () {
  $(document).ready(function () {
    console.log(document.querySelector(".pie"));
    const myChart = echarts.init(document.querySelector(".pie"));

    const option = {
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/> {b}: {c} ({d}%)",
        backgroundColor: "rgba(0,0,0,0.4)",
        textStyle: {
          color: "#fff",
        },
        borderWidth: 0,
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: "销售统计",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "50%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            fontSize: 10,
          },
          labelLine: {
            length: 6,
            length2: 8,
          },
          data: [
            { value: 22, name: "云南", label: { color: "#006cff" } },
            { value: 28, name: "北京", label: { color: "#60cda0" } },
            { value: 25, name: "山东", label: { color: "#ed8884" } },
            { value: 25, name: "河北", label: { color: "#ff9f7f" } },
            { value: 32, name: "江苏", label: { color: "#ff9f7f" } },
            { value: 22, name: "浙江", label: { color: "#9fe6b8" } },
            { value: 31, name: "四川", label: { color: "#32c5e9" } },
            { value: 42, name: "上海", label: { color: "#1d8dff" } },
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

(function () {
  $(document).ready(function () {
    let item = {
      value: 1200,
      itemStyle: {
        color: "#254065",
      },
      tooltip: {
        extraCssText: "opacity : 0",
      },
      emphasis: {
        itemStyle: {
          color: "#254065",
        },
      },
    };

    const myChart = echarts.init(document.querySelector(".bar"));

    const option = {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#00fffb", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#0061ce", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      tooltip: {
        trigger: "item",
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        textStyle: {
          color: "#fff",
        },
        formatter: "{a} <br/> {b} : {c}",
      },
      grid: {
        left: "0%",
        top: "3%",
        right: "3%",
        bottom: "3%",
        containLabel: true,
        show: true,
        borderColor: "rgba(0,240,255,0.3)",
      },
      xAxis: [
        {
          type: "category",
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆",
          ],
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0,240,255,0.3)",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            alignWithLabel: false,
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },

          splitLine: {
            lineStyle: {
              color: "rgba(0,240,255,0.3)",
            },
          },
        },
      ],
      series: [
        {
          name: "用户总量",
          type: "bar",
          barWidth: "60%",
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240,
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

(function () {
  $(document).ready(function () {
    let data = {
      day365: {
        orders: "30,321,988",
        amount: "99882",
      },
      day90: {
        orders: "301,987",
        amount: "9834",
      },
      day30: {
        orders: "1,987",
        amount: "3834",
      },
      day1: {
        orders: "987",
        amount: "834",
      },
    };

    const $h4Order = $(".order .data h4:eq(0)");
    const $h4Amount = $(".order .data h4:eq(1)");

    let _index = 1;
    $(".order .tabs a").click(function () {
      _index = $(this).index();
      tabs();
    });

    setInterval(() => {
      tabs();
      _index += 1;
      if (_index >= 4) {
        _index = 0;
      }
    }, 3000);

    function tabs() {
      $(".order .tabs a")
        .eq(_index)
        .addClass("active")
        .siblings()
        .removeClass("active");

      const _attr = $(".order .tabs a").get(_index).dataset.type;
      const _data = data[_attr];
      $h4Order.html(_data.orders);
      $h4Amount.html(_data.amount);
    }
  });
})();

// (function () {
//   $(document).ready(function () {
//     let _index = 0;
//     $(".sales .tabs").on("click", "a", function () {
//       _index = $(this).index();
//       tabs();
//     });

//     setInterval(() => {
//       tabs();
//       _index += 1;
//       if (_index >= 4) {
//         _index = 0;
//       }
//     }, 3000);

//     function tabs() {
//       $(".sales .tabs a")
//         .eq(_index)
//         .addClass("active")
//         .siblings()
//         .removeClass("active");
//     }
//     const line = document.querySelector(".line");
//     const myChart = echarts.init(line);

//     const option = {
//       color: ["#00f2f1", "#ed3f35"],
//       title: {
//         text: "单位：万",
//         textStyle: {
//           color: "#4c9bfd",
//           fontSize: 12,
//         },
//       },
//       tooltip: {
//         trigger: "axios",
//         backgroundColor: "rgba(0,0,0,0.3)",
//         borderWidth: 0,
//         textStyle: {
//           color: "#fff",
//         },
//       },
//       legend: {
//         data: ["预期销售额", "实际销售额"],
//         textStyle: {
//           color: "#4c9bfd",
//         },
//         right: "10%",
//       },
//       grid: {
//         left: "0%",
//         right: "3%",
//         bottom: "3%",
//         top: "20%",
//         containLabel: true,
//         show: true,
//         borderColor: "#012f4a",
//       },
//       xAxis: {
//         type: "category",
//         boundaryGap: false,
//         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//         axisTick: {
//           alignWithLabel: false,
//           show: false,
//         },
//         axisLabel: {
//           color: "#4c9bfd",
//         },
//         axisLine: {
//           show: false,
//         },
//       },
//       yAxis: {
//         type: "value",
//         axisTick: {
//           alignWithLabel: false,
//           show: false,
//         },
//         axisLabel: {
//           color: "#4c9bfd",
//         },
//         axisLine: {
//           show: false,
//         },
//         splitLine: {
//           lineStyle: {
//             color: "#012f4a",
//           },
//         },
//       },
//       series: [
//         {
//           name: "预期销售额",
//           type: "line",
//           data: [120, 132, 101, 134, 90, 230, 210],
//         },
//         {
//           name: "实际销售额",
//           type: "line",
//           data: [220, 182, 191, 234, 290, 330, 310],
//         },
//       ],
//     };
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//       myChart.resize();
//     });
//   });
// })();

(function () {
  $(document).ready(function () {
    const data = {
      year: {
        info: [
          "2099年",
          "2199年",
          "2299年",
          "2399年",
          "2499年",
          "2599年",
          "2699年",
          "2799年",
          "2899年",
          "2999年",
          "3099年",
          "3199年",
        ],
        detail: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
      },
      quarter: {
        info: ["1季度", "2季度", "3季度", "4季度"],
        detail: [
          [23, 75, 12, 97],
          [43, 31, 65, 23],
        ],
      },
      month: {
        info: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        detail: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
        ],
      },
      week: {
        info: ["近1周", "近2周", "近3周", "近4周", "近5周", "近6周"],
        detail: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
        ],
      },
    };
    const line = document.querySelector(".line");
    const myChart = echarts.init(line);
    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["预期销售额", "实际销售额"],
        textStyle: {
          color: "#4c9bfd",
        },
        right: "10%",
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true,
        borderColor: "#012f4a",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        axisLabel: {
          color: "#4c9bfd",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
        },
        boundaryGap: false,
        data: data.year.info,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#4c9bfd",
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a",
          },
        },
      },
      color: ["#00f2f1", "#ed3f35"],
      series: [
        {
          name: "预期销售额",
          type: "line",
          stack: "Total",
          smooth: true,
          data: data.year.detail[0],
        },
        {
          name: "实际销售额",
          type: "line",
          stack: "Total",
          smooth: true,
          data: data.year.detail[1],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

    let index = 0;
    let timer = null;
    $(".sales").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass();
      index = $(this).index() - 1;
      const type = this.dataset.type;
      const currData = data[type];
      option.xAxis.data = currData.info;
      option.series[0].data = currData.detail[0];
      option.series[1].data = currData.detail[1];
      myChart.setOption(option);
    });

    const as = $(".sales .caption a");

    move();

    $(".sales").hover(
      function () {
        clearInterval(timer);
      },
      function () {
        move();
      }
    );

    function move() {
      timer = setInterval(function () {
        index++;
        if (index == 4) index = 0;
        as.eq(index).click();
      }, 1000);
    }
  });
})();
