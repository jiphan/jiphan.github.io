<template>
  <!-- TradingView Widget BEGIN -->
  <div class="tradingview-widget-container">
    <div id="tradingview_53906"></div>
  </div>
  <!-- TradingView Widget END -->
</template>

<script>
export default {
  methods: {
    refresh(name) {
      console.log(name)
    },
  },
  mounted() {
    let tradingviewScript = document.createElement("script");
    tradingviewScript.setAttribute("src", "https://s3.tradingview.com/tv.js");
    document.head.appendChild(tradingviewScript);

    setTimeout(function () {
      new window.TradingView.widget({
        width: "auto",
        height: 480,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_53906",
      });
    }, 1000);
  },
};
</script>