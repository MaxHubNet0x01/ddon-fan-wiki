/**
 * A page that is wishlistable must have:
 * wishlistElement
 * wishlistItemNameElement : must be a child
 * wishlistItemLinkElement : must be a child
 * wishlistItemDescriptionElement : should not break because I use tailwind so can copy the HTML, child too
 * @returns null
 */
function initWishlist(){
  if (!DF_Wiki.wishlistConfig){
    console.log("Page not Wishlistable");
    return;
  }


}

$(initWishlist);