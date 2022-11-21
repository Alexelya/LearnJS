
let userJson = "username: Alex";

/*try {
            let a = "UserName";
            let b = a;
            let c = b.toLowerCased();
            console.log(c);
        } catch (err) {
            console.log("Error (name) = ", err.name);
            console.log("Error (message) = ", err.message);
            console.log("Error (stack) = ", err.stack);
            // console.log("Error = ", err);
        }*/

        try {
            throw new Error("Не верно");
        } catch (err) {
            console.log("Error (name) = ", err.name);
            console.log("Error (message) = ", err.message);
            console.log("Error (stack) = ", err.stack);
            // console.log("Error = ", err);
        }