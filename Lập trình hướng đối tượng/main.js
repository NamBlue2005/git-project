const m1= new Mobile();
m1.turnOn();

document.write(m1.checkstatus());
m1.turnOff();
document.write("<br>");

document.write(m1.checkstatus());
document.write("<br>");
document.write(m1.pin);
m1.chargePin();
document.write("<br>");
document.write(m1.pin);
m1.writeMessage("Tin nhan gui di");

const m2 = new Mobile();
m2.turnOn();
m1.sentMessages(m2.checkstatus());
m2.turnOff();
document.write(m2.checkstatus());
document.write("<br>");
document.write(m2.pin);
m2.chargePin();
document.write("<br>");
document.write(m2.pin);
m2.writeMessage()