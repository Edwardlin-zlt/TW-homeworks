!(function(c) {
  var e,
    l =
      '<svg><symbol id="iconclose" viewBox="0 0 1045 1024"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"  ></path></symbol><symbol id="iconlink" viewBox="0 0 1024 1024"><path d="M618.24 439.381333a152.746667 152.746667 0 0 1 0 216l-135.893333 135.893334a163.370667 163.370667 0 1 1-231.04-231.04l66.922666-66.944 45.269334 45.269333-66.944 66.944a99.370667 99.370667 0 1 0 140.522666 140.522667l135.893334-135.893334a88.746667 88.746667 0 0 0 0-125.482666z m182.528-197.589333a163.370667 163.370667 0 0 1 0 231.04L733.866667 539.776l-45.269334-45.248 66.944-66.944a99.370667 99.370667 0 1 0-140.522666-140.522667l-135.893334 135.893334a88.746667 88.746667 0 0 0 0 125.482666l-45.269333 45.269334a152.746667 152.746667 0 0 1 0-216l135.893333-135.893334a163.370667 163.370667 0 0 1 231.04 0z"  ></path></symbol><symbol id="iconcamera" viewBox="0 0 1024 1024"><path d="M810.667 256a64 64 0 0 1 64 64v426.667a64 64 0 0 1-64 64H213.333a64 64 0 0 1-64-64V320a64 64 0 0 1 64-64h597.334z m0 64H213.333v426.667h597.334V320zM512 384a149.333 149.333 0 1 1 0 298.667A149.333 149.333 0 0 1 512 384z m0 64a85.333 85.333 0 1 0 0 170.667A85.333 85.333 0 0 0 512 448z m298.667-298.667v64H512v-64h298.667z"  ></path></symbol><symbol id="iconsearch" viewBox="0 0 1024 1024"><path d="M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (a = c.document),
        (i = !1),
        (l = function() {
          try {
            a.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(l, 50);
          }
          n();
        })(),
        (a.onreadystatechange = function() {
          "complete" == a.readyState && ((a.onreadystatechange = null), n());
        }));
    function n() {
      i || ((i = !0), o());
    }
    var o, a, i, l;
  })(function() {
    var e, t, n, o, a, i;
    ((e = document.createElement("div")).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((a = n), (i = o.firstChild).parentNode.insertBefore(a, i))
          : o.appendChild(n));
  });
})(window);
