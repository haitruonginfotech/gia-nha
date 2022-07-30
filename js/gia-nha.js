(function($) {
    $(".dropdown-select").on("click", function (){
        var $this = $(this);
        $this.find(".dropdown-items").toggle()
    });
    $(".basic_info_supplement").click(function(e) {
        /*$('body').animate({
            scrollTop: $("#basic_info_supplement").offset().top
        }, 600);
        console.log($("#basic_info_supplement").offset().top);
        $("#basic_info_supplement").animate({ scrollTop: $('#basic_info_supplement').prop("scrollHeight")}, 1000);
        */
        var myDiv = document.getElementById("basic_info_supplement");
        myDiv.scrollTop = myDiv.scrollHeight;

        var mydiv = $("#basic_info_supplement");
        mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });
    $(".posts-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        autoplay: !0,
        dots: !1,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: !1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.1,
                arrows: !1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: !1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2.1,
                arrows: !1,
            }
        }]
    });

    function detectMob(t) {
        return [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i].some(function (t) {
            return navigator.userAgent.match(t);
        });
    }
    var data = {"data":{"avg_price":[{"year":2022,"value":30.99},{"year":2021,"value":25.77},{"year":2020,"value":22.30},{"year":2019,"value":21.75},{"year":2018,"value":20.93}],"trans":[{"year":2022,"value":30.99},{"year":2021,"value":25.77},{"year":2020,"value":22.30},{"year":2019,"value":21.75},{"year":2018,"value":20.93}],"sales_amount":[{"year":2022,"value":347},{"year":2021,"value":1712},{"year":2020,"value":1180},{"year":2019,"value":1359},{"year":2018,"value":1259}],"house_age":[{"house_age_tag":"0_5","value":"28.76"},{"house_age_tag":"5_10","value":"24.31"},{"house_age_tag":"10_20","value":"24.33"},{"house_age_tag":"20_30","value":"22.68"},{"house_age_tag":"30_40","value":"19.50"},{"house_age_tag":"40_","value":"0.00"}]}};
    var avg_price = data.data.avg_price;
    var avg_price_year = [];
    var avg_price_value = [];
    for (var i in avg_price) {
        avg_price_year.push(avg_price[i].year);
        avg_price_value.push(avg_price[i].value);
    }
    avg_price_year = avg_price_year.reverse();
    avg_price_value = avg_price_value.reverse();

    var trans = data.data.avg_price;
    var trans_year = [];
    var trans_value = [];
    for (var i in trans) {
        trans_year.push(trans[i].year);
        trans_value.push(trans[i].value);
    }
    trans_year = trans_year.reverse();
    trans_value = trans_value.reverse();

    var chart_data = {
        labels: avg_price_year,
        datasets: [
            {
                data: avg_price_value,
                backgroundColor: ["rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(224, 236, 253, 0.2)"],
                borderColor: ["rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)", "rgba(68, 181, 187, 1)"],
                borderWidth: 1,
                barThickness: detectMob(this) ? 18 : 30,
            },
        ],
    };

    var avg_chart = document.getElementById("chart-avg_chart");
    new Chart(avg_chart, {
        type: "bar",
        data: chart_data,
        options: {
            responsive: !1,
            maintainAspectRatio: !1,
            tooltips: { enabled: !1 },
            legend: { display: !1 },
            scales: {
                xAxes: [{ gridLines: { display: !1 }, ticks: { fontSize: detectMob(this) ? 14 : 16, fontColor: "#484848", padding: 10 } }],
                yAxes: [
                    {
                        position: "right",
                        gridLines: { drawBorder: !1, display: !0 },
                        ticks: { suggestedMin: 16, suggestedMax: 36, stepSize: 4, fontSize: detectMob(this) ? 14 : 16, fontColor: "#696464", padding: 10 },
                    },
                ],
            },
            hover: { animationDuration: 0 },
            animation: {
                onComplete: function () {
                    CanvasRenderingContext2D.prototype.roundRect = function (t, e, a, i, r) {
                        return (
                            a < 2 * r && (r = a / 2),
                            i < 2 * r && (r = i / 2),
                                this.beginPath(),
                                this.moveTo(t + r, e),
                                this.arcTo(t + a, e, t + a, e + i, r),
                                this.arcTo(t + a, e + i, t, e + i, r),
                                this.arcTo(t, e + i, t, e, r),
                                this.arcTo(t, e, t + a, e, r),
                                this.closePath(),
                                this
                        );
                    };
                    var e = this.chart;
                    ((s = e.ctx).font = "16px"),
                        (s.textAlign = "center"),
                        (s.textBaseline = "bottom"),
                        this.data.datasets.forEach(function (a, i) {
                            e.controller.getDatasetMeta(i).data.forEach(function (e, i) {
                                var r = detectMob(this) ? e._model.x - 25 : e._model.x - 48,
                                    n = detectMob(this) ? 20 : 23,
                                    C = detectMob(this) ? e._model.y - 27 : e._model.y - 30,
                                    o = detectMob(this) ? 70 : 95,
                                    l = s.createLinearGradient(r, C, r + o, C - n);
                                l.addColorStop(0, "#11506D "), l.addColorStop(1, "#3d779e"), (s.fillStyle = l), s.roundRect(r, C, o, n, 20), s.fill();
                                var c = a.data[i];
                                (s.fillStyle = "#ffffff"), detectMob(this) ? s.fillText(c, e._model.x, e._model.y - 9) : s.fillText( c + "tr/m2", e._model.x, e._model.y - 9);
                            });
                        });
                }
            }
        }
    });

    var trans_chart = document.getElementById("chart-trans_chart");
    new Chart(trans_chart, {
        type: "bar",
        data: chart_data,
        options: {
            responsive: !1,
            maintainAspectRatio: !1,
            tooltips: { enabled: !1 },
            legend: { display: !1 },
            scales: {
                xAxes: [{ gridLines: { display: !1 }, ticks: { fontSize: detectMob(this) ? 14 : 16, fontColor: "#484848", padding: 10 } }],
                yAxes: [
                    {
                        position: "right",
                        gridLines: { drawBorder: !1, display: !0 },
                        ticks: { suggestedMin: 16, suggestedMax: 36, stepSize: 4, fontSize: detectMob(this) ? 14 : 16, fontColor: "#696464", padding: 10 },
                    },
                ],
            },
            hover: { animationDuration: 0 },
            animation: {
                onComplete: function () {
                    CanvasRenderingContext2D.prototype.roundRect = function (t, e, a, i, r) {
                        return (
                            a < 2 * r && (r = a / 2),
                            i < 2 * r && (r = i / 2),
                                this.beginPath(),
                                this.moveTo(t + r, e),
                                this.arcTo(t + a, e, t + a, e + i, r),
                                this.arcTo(t + a, e + i, t, e + i, r),
                                this.arcTo(t, e + i, t, e, r),
                                this.arcTo(t, e, t + a, e, r),
                                this.closePath(),
                                this
                        );
                    };
                    var e = this.chart;
                    ((s = e.ctx).font = "16px"),
                        (s.textAlign = "center"),
                        (s.textBaseline = "bottom"),
                        this.data.datasets.forEach(function (a, i) {
                            e.controller.getDatasetMeta(i).data.forEach(function (e, i) {
                                var r = detectMob(this) ? e._model.x - 25 : e._model.x - 48,
                                    n = detectMob(this) ? 20 : 23,
                                    C = detectMob(this) ? e._model.y - 27 : e._model.y - 30,
                                    o = detectMob(this) ? 70 : 95,
                                    l = s.createLinearGradient(r, C, r + o, C - n);
                                l.addColorStop(0, "#11506D "), l.addColorStop(1, "#3d779e"), (s.fillStyle = l), s.roundRect(r, C, o, n, 20), s.fill();
                                var c = a.data[i];
                                (s.fillStyle = "#ffffff"), detectMob(this) ? s.fillText(c, e._model.x, e._model.y - 9) : s.fillText( c, e._model.x, e._model.y - 9);
                            });
                        });
                }
            }
        }
    });

    var houseAge_chart = document.getElementById("chart-houseAge_chart");
    new Chart(houseAge_chart, {
        type: "bar",
        data: chart_data,
        options: {
            responsive: !1,
            maintainAspectRatio: !1,
            tooltips: { enabled: !1 },
            legend: { display: !1 },
            scales: {
                xAxes: [{ gridLines: { display: !1 }, ticks: { fontSize: detectMob(this) ? 14 : 16, fontColor: "#484848", padding: 10 } }],
                yAxes: [
                    {
                        position: "right",
                        gridLines: { drawBorder: !1, display: !0 },
                        ticks: { suggestedMin: 16, suggestedMax: 36, stepSize: 4, fontSize: detectMob(this) ? 14 : 16, fontColor: "#696464", padding: 10 },
                    },
                ],
            },
            hover: { animationDuration: 0 },
            animation: {
                onComplete: function () {
                    CanvasRenderingContext2D.prototype.roundRect = function (t, e, a, i, r) {
                        return (
                            a < 2 * r && (r = a / 2),
                            i < 2 * r && (r = i / 2),
                                this.beginPath(),
                                this.moveTo(t + r, e),
                                this.arcTo(t + a, e, t + a, e + i, r),
                                this.arcTo(t + a, e + i, t, e + i, r),
                                this.arcTo(t, e + i, t, e, r),
                                this.arcTo(t, e, t + a, e, r),
                                this.closePath(),
                                this
                        );
                    };
                    var e = this.chart;
                    ((s = e.ctx).font = "16px"),
                        (s.textAlign = "center"),
                        (s.textBaseline = "bottom"),
                        this.data.datasets.forEach(function (a, i) {
                            e.controller.getDatasetMeta(i).data.forEach(function (e, i) {
                                var r = detectMob(this) ? e._model.x - 25 : e._model.x - 48,
                                    n = detectMob(this) ? 20 : 23,
                                    C = detectMob(this) ? e._model.y - 27 : e._model.y - 30,
                                    o = detectMob(this) ? 70 : 95,
                                    l = s.createLinearGradient(r, C, r + o, C - n);
                                l.addColorStop(0, "#11506D "), l.addColorStop(1, "#3d779e"), (s.fillStyle = l), s.roundRect(r, C, o, n, 20), s.fill();
                                var c = a.data[i];
                                (s.fillStyle = "#ffffff"), detectMob(this) ? s.fillText(c, e._model.x, e._model.y - 9) : s.fillText( c + 'tr/m2', e._model.x, e._model.y - 9);
                            });
                        });
                }
            }
        }
    });
    $(".grid-slider").each(function () {
        var $this = $(this);
        $this.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !1,
            autoplay: !1,
            dots: !1,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        autoplay: !0,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        autoplay: !0,
                    }
                }
            ]
        });
    });
})( jQuery );