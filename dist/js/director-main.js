/* The parent script running all the sub scripts and functions directors page uses.
 * Created:         5.9.23
 * Contributors:    Andrew G.
 */

// Global variables
var views = {
    av8v1a: {
        viewtype: "vdoroom",
        data: {
            roomObject: {}
        }
    }
};

// Loads the view into the viewbox
function loadView(button) {
    // Checking if there is a view id attribute
    var vid = button.getAttribute("data-viewid");
    if(vid) {
        // Finding the view
        if(views[vid]) {
            // If the view is a vdo.ninja room
            if(views[vid].viewtype === "vdoroom") {
                // load the room based on data from the roomObject
                console.log("Loading vdo.ninja room " + vid)
            }
        }else {
            console.error("View ID '" + vid + "' wasn't found as a view. There was a problem, and so didn't load the view.")
        }
    }else {
        console.error("Can't load view without the button having a 'data-viewid' attribute. Didn't load view.")
    }
}