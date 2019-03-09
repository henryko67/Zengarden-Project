/*
 * index.js
 * This is a Javascript page used to switch CSS pages for the CSS154ZenGarden project
 */

(function() {
  "use strict";

  /**
   * Attach the load event listener to the page, so we can initialize the page.
   */
  window.addEventListener("load", initialize);

  /**
   * This function starts all the functions necessary for functionality in the page.
   */
  function initialize() {
    $("styles").addEventListener("change", () => {
      changeCSS($("styles").value, 0);
    });
  }


  /**
   * This function swaps the desired CSS link.
   * @param {string} cssFile The name of the CSS file that we will be switching to
   * @param {number} cssLinkIndex the index of the link tag for the CSS in the HTML file.
   */
   function changeCSS(cssFile, cssLinkIndex) {

       let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
       let newlink = document.createElement("link");

       newlink.setAttribute("rel", "stylesheet");
       newlink.setAttribute("href", cssFile);

       document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
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
