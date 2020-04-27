import axios from "axios";

// handles payment -> check firestripe for stripe cloud functiosn with firebase
handleToken((token) => {
    let product = {
        price: this.state.amount,
        name: "Top-Up E-Wallet",
        decscription: "Top-Up"
    }
    const response = await axios.post(
        "http://localhost:19006/charge", // by right when served onto staging server port will be 5000
        {
            token,
            product
        }
    );
    const {
        status
    } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
        toast("Success! Check email for details", {
            type: "success"
        });
    } else {
        toast("Something went wrong", {
            type: "error"
        });
    }
})

module.exports.handleToken = handleToken;
