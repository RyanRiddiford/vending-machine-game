



export const user = () => {

    const initialUser = {
        credit: rng(10, 20),
    }
}


function rng(type = "credit", min = 0, max = 100) {
    const number = (Math.random() * (max - min) + min).toFixed(2);
}