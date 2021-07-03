var MadeWith = {};
MadeWith.size = {
  large: {
    img: {
      width: "30px",
      height: "30px",
      fill: "red"
    },
    text: {
      fontSize: "18px",
      marginRight: "14px"
    },
    div: {
      borderRadius: "10px",
      padding: "5px 12px",
      borderStyle: "solid",
      borderWidth: "2.5px"
    }
  },
  medium: {
    img: {
      width: "20px",
      height: "20px",
      fill: "red"
    },
    text: {
      fontSize: "12px",
      marginRight: "10px"
    },
    div: {
      borderRadius: "8px",
      padding: "5px 12px",
      borderStyle: "solid",
      borderWidth: "2px"
    }
  },
  small: {
    img: {
      width: "14px",
      height: "14px",
      fill: "red"
    },
    text: {
      fontSize: "10px",
      marginRight: "8px"
    },
    div: {
      borderRadius: "5px",
      padding: "3px 8px",
      borderStyle: "solid",
      borderWidth: "1.5px"
    }
  }
};
MadeWith.theme = {
  light: {
    img: {
      filter: "invert(0%)"
    },
    text: {
      color: "black"
    },
    div: {
      borderColor: "black",
      backgroundColor: "white"
    }
  },
  dark: {
    img: {
      filter: "invert(100%)"
    },
    text: {
      color: "white"
    },
    div: {
      borderColor: "white",
      backgroundColor: "#212529"
    }
  }
};

MadeWith.getSize = function (el) {
  var _el$getAttribute;

  return (_el$getAttribute = el.getAttribute("data-mw-size")) !== null && _el$getAttribute !== void 0 ? _el$getAttribute : "medium";
};

MadeWith.getTheme = function (el) {
  var _el$getAttribute2;

  return (_el$getAttribute2 = el.getAttribute("data-mw-theme")) !== null && _el$getAttribute2 !== void 0 ? _el$getAttribute2 : "light";
};

MadeWith.applyStyle = function (el, theme, size) {
  Object.assign(el.style, theme);
  Object.assign(el.style, size);
};

MadeWith.enable = function () {
  document.querySelectorAll(".made-with").forEach(function (el) {
    var theme = MadeWith.getTheme(el);
    var size = MadeWith.getSize(el);
    var madeWithIconName = el.getAttribute("data-mw-icon");
    var icon = document.createElement("img");
    icon.setAttribute("src", "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/".concat(madeWithIconName, ".svg"));
    var textMadeWith = document.createElement("span");
    textMadeWith.innerHTML = "Made with";
    textMadeWith.style.fontFamily = "'Segoe UI', Roboto,'Helvetica Neue', Arial,'Noto Sans','Liberation Sans', sans-serif";
    textMadeWith.style.display = "inline-block";
    textMadeWith.style.fontWeight = "600";
    el.style.display = "inline-flex";
    el.style.alignItems = "center";
    el.style.margin = "0";
    [[icon, "img"], [textMadeWith, "text"], [el, "div"]].forEach(function (element) {
      MadeWith.applyStyle(element[0], MadeWith.theme[theme][element[1]], MadeWith.size[size][element[1]]);
    });
    el.appendChild(textMadeWith);
    el.appendChild(icon);
  });
};

export default MadeWith;