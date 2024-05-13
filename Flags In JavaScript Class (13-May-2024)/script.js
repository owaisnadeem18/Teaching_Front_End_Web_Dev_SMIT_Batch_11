// Flags in JavaScript

// Flags deal in boolean numbers i.e true or false

// lets have a look at an example of bulb on and off

let isBulbOn = false;

function bulb_kholo() {
  isBulbOn = true;

  if (isBulbOn) {
    console.log("Bulb is on");
  } else {
    console.log("Bulb is off");
  }
}

function check_status_of_bulb() {
  if (isBulbOn) {
    console.log("Bulb khula hua hay ");
  } else {
    console.log("Bulb band hua vaa hay ");
  }
}

function Phir_bnd_kardo() {
  isBulbOn = false;
}

check_status_of_bulb();

bulb_kholo();

check_status_of_bulb();

Phir_bnd_kardo();

check_status_of_bulb();
