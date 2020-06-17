
      function updateChart() {
        var element1 = document.getElementById("info");
        var element2 = document.getElementById("chart");
        if (element2 != null) {
          if (element1 != null) {
            element1.parentNode.removeChild(element1);
          }
          element2.parentNode.removeChild(element2);
        }

        var e = document.getElementById("ddlViewBy");
        var ticker = e.options[e.selectedIndex].value;

        chart = {
          symbol: ticker,
          width: "100%",
          height: "100%",
          locale: "en",
          dateRange: "12m",
          colorTheme: "light",
          trendLineColor: "#37a6ef",
          underLineColor: "#E3F2FD",
          isTransparent: true,
          autosize: true,
          largeChartUrl: "",
        };

        var script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.setAttribute("async", "");
        script2.setAttribute("id", "chart");
        script2.text = JSON.stringify(chart);
        script2.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        document.getElementById("chartDiv").appendChild(script2);
        gotoBrief();
      }
      function gotoFin() {
        var element1 = document.getElementById("infoDiv");
        if (element1 != null) {
          element1.innerHTML = "";
          element1.style.overflow = "visible";
        }
        var script = document.createElement("script");

        var e = document.getElementById("ddlViewBy");
        var ticker = e.options[e.selectedIndex].value;

        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        info = {
          symbol: ticker,
          colorTheme: "light",
          isTransparent: true,
          largeChartUrl: "",
          displayMode: "compact",
          width: "100%",
          height: "100%",
          locale: "en",
        };
        script.type = "text/javascript";
        script.setAttribute("async", "");
        script.setAttribute("id", "info");
        script.text = JSON.stringify(info);
        document.getElementById("infoDiv").appendChild(script);

        document.getElementById("menu").setAttribute("hidden", "false");
      }

      function gotoTech() {
        var element1 = document.getElementById("infoDiv");
        if (element1 != null) {
          element1.innerHTML = "";
          element1.style.overflow = "visible";
        }
        var script = document.createElement("script");

        var e = document.getElementById("ddlViewBy");
        var ticker = e.options[e.selectedIndex].value;

        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        info = {
          symbol: ticker,
          interval: "1W",
          width: "100%",
          height: "100%",
          isTransparent: true,
          showIntervalTabs: true,
          locale: "en",
          colorTheme: "light",
        };
        script.type = "text/javascript";
        script.setAttribute("async", "");
        script.setAttribute("id", "info");
        script.text = JSON.stringify(info);
        document.getElementById("infoDiv").appendChild(script);

        document.getElementById("menu").style.visibility = "visible";
      }

      function gotoBrief() {
        var element1 = document.getElementById("infoDiv");
        if (element1 != null) {
          element1.innerHTML = "";
          element1.style.overflow = "visible";
        }
        var script = document.createElement("script");

        var e = document.getElementById("ddlViewBy");
        var ticker = e.options[e.selectedIndex].value;

        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
        info = {
          symbol: ticker,
          width: "100%",
          height: "100%",
          colorTheme: "light",
          isTransparent: false,
          locale: "en",
        };
        script.type = "text/javascript";
        script.setAttribute("async", "");
        script.setAttribute("id", "info");
        script.text = JSON.stringify(info);
        document.getElementById("infoDiv").appendChild(script);

        document.getElementById("menu").style.visibility = "visible";
      }

      function gotoNews() {
        var element1 = document.getElementById("infoDiv");
        if (element1 != null) {
          element1.innerHTML = "";
          element1.style.overflow = "scroll";
        }
        var script = document.createElement("script");

        var e = document.getElementById("ddlViewBy");
        var ticker = e.options[e.selectedIndex].value;
        var tick = ticker.split(":")[1];
        script.src =
          "https://rss.bloople.net/?url=http%3A%2F%2Ffinance.yahoo.com%2Frss%2Fheadline%3Fs%3D" +
          tick +
          "&showtitle=false&type=js";
        script.type = "text/javascript";
        // script.setAttribute("async", "");
        script.setAttribute("id", "info");
        document.getElementById("infoDiv").appendChild(script);

        document.getElementById("menu").style.visibility = "visible";
      }