"use strict";


const btnEl = document.getElementById("btn-calculate");

class CalculatePay {
    #startHour;
    #startMinutes;
    #endHour;
    #endMinutes;
    #startDate;
    #endDate

    constructor(startH, startM, endH, endM) {
        this.#startHour = startH;
        this.#startMinutes = startM;
        this.#endHour = endH;
        this.#endMinutes = endM;
        this.#startDate = new Date("2021-01-01 " + this.#startHour + ":" + this.#startMinutes);
        this.#endDate = new Date("2021-01-01 " + this.#endHour + ":" + this.#endMinutes);
    }

    calculateHour = () => {
        let difference = this.#endDate - this.#startDate;
        return Math.floor(difference / 1000 / 60 / 60);
    }

    calculateMinute = () => { 
        let difference = this.#endDate - this.#startDate;
        return Math.floor(difference / 1000 / 60) % 60;
    }

    calculateHourPay() {
        return 0;
    }

    calculateExtraEvening() {
        return 0;
    }
}

class IndexController {

    static handleEvent = () => {
        let startHour = document.getElementById("start-hour").value;
        let startMinutes = document.getElementById("start-minutes").value;
        let endHour = document.getElementById("end-hour").value;
        let endMinutes = document.getElementById("end-minutes").value;

        const calculateObj = new CalculatePay(startHour, startMinutes, endHour, endMinutes);

        let resultHour = calculateObj.calculateHour();
        let resultMinute = calculateObj.calculateMinute();

        document.getElementById("result-hour").textContent = resultHour;
        document.getElementById("result-minutes").textContent = resultMinute;
    }
}




btnEl.addEventListener("click", IndexController.handleEvent);
