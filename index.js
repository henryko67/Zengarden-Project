/*
This is a Javascript page used to switch CSS pages for the HTML
*/

(function() {
  "use strict";
  window.addEventListener("load", initialize);
  //let menu = document.getElementById("changes"); (NOT WORKING)

  /**
  * This function starts all the functions necessary for functionality in the page.
  */
  function initialize() {
    document.getElementById("changes").addEventListener("change", swap);
  }

  /**
  * This function initiates and detects the CSS file to swap to.
  */
  function swap(event) {
    if (document.getElementById("changes").value == "1") {
      changeCSS("index.css", "0");
    }
    else {
      changeCSS("style2.css", "0");
    }
  }

  /**
   * This function swaps the desired CSS link.
   */
   function changeCSS(cssFile, cssLinkIndex) {

       let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

       let newlink = document.createElement("link");
       newlink.setAttribute("rel", "stylesheet");
       newlink.setAttribute("type", "text/css");
       newlink.setAttribute("href", cssFile);

       document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
   }

  /**
   * This function returns an element with the given ID.
   * @param {string} id - The id of the element.
   * @returns {object} - An element with the given id.
   */
  function $(id) {
    return document.getElementById(id);
  }
})();
