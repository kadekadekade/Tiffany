//การแสดงข้อมูล
let JS="Javascript";
document.write("การแสดงข้อมูล documant.write =",JS);
alert("การแสดงข้อมูล alert =",JS);
console.log("การแสดงข้อมูล console.log =",JS);

//ตัวแปร
var v=100;
let l=100;
const c=100;
console.log("var v =",v,"เปลี่ยนแปลงค่าได้");
console.log("let l =",l,"เปลี่ยนแปลงค่าได้");
console.log("const c =",c,"ค่าคงที่ เปลี่ยนแปลงไม่ได้");

//number
let x=100,y=100.01;
console.log(x+"=integer"+"  "+y+"=float");

//type conversion : string to number and number to string
let stringNumber="100.5";
let stringConvInt=parseInt(stringNumber);
let stringConvFlo=parseFloat(stringNumber);
let stringConvByPlus=+"100.5"
let number=50.5;
let numberConvByQ=number+"";
let numberConvByDot=number.toString();
console.log("ค่าเริ่มต้น stringNumber="+stringNumber);
console.log(typeof(stringNumber));
console.log("stringConvInt="+stringConvInt);
console.log(typeof(stringConvInt));
console.log("stringConvFlo="+stringConvFlo);
console.log(typeof(stringConvFlo));
console.log("stringConvByPlus="+stringConvByPlus);
console.log(typeof(stringConvByPlus));
console.log("ค่าเริ่มต้น number="+number);
console.log(typeof(number));
console.log("numberConvByQ="+numberConvByQ)
console.log(typeof(numberConvByQ));
console.log("numberConvByDot="+numberConvByDot)
console.log(typeof(numberConvByDot));

//Array
let aespaMember1=Array("พี่น่า","พี่เจว","น้องหนาว","หนุงหนิง");
console.log("aespa member:"+aespaMember1);
console.log("1"+aespaMember1[0]+" "+"2"+aespaMember1[1]+" "+"3"+aespaMember1[2]+" "+"4"+aespaMember1[3]);
let aespaMember2=["ae-พี่น่า","ae-พี่เจว","ae-น้องหนาว","ae-หนุงหนิง"];
console.log("aespa ae-member:"+aespaMember2);
console.log("1"+aespaMember2[0]+" "+"2"+aespaMember2[1]+" "+"3"+aespaMember2[2]+" "+"4"+aespaMember2[3]);


//if statement
let input=55;
let wallet=500;
let balance;
if (input>=30 && input<=60){
    console.log("wallet =",wallet);
    console.log("price =",input);
    balance=(wallet-=input);
    console.log("balance =",balance);
}


//if ซ้อน if
let income=700000;
if (income>=5000001){
    console.log("เสียภาษี 35%");
} else if (income>=750001 && income<=5000000){
            if (income>=750001 && income<=1000000){
                 console.log("เสียภาษี 20%");
            }else if (income>=1000001 && income<=2000000){
                 console.log("เสียภาษี 25%");
                }
            else if (income>=2000001 && income<=5000000){
                 console.log("เสียภาษี 30%");
                }
} else if (income>=150001 && income<=750000){
            if (income>=150001 && income<=300000){
                 console.log("เสียภาษี 5%");
            }else if (income>=300001 && income<=500000){
                 console.log("เสียภาษี 10%");
            }else if (income>=500001 && income<=750000){
                 console.log("เสียภาษี 15%");
            }
} else {
    console.log("ได้รับการยกเว้นเสียภาษี");
}

//switch...case
let number=3;
let stage;
switch (number){
    case 1 : stage="Early blastocyst";
            break;
    case 2 : stage="Blastocyst";
            break;
    case 3 : stage="Expanded blastocyst";
            break;
    case 4 : stage="Hatching/Hatched blastocyst";
            break;
    default : stage="กรุณาป้อนข้อมูลใหม่";
}
    console.log(stage);

//switch...case=if
let number=3;
let stage;
if (number==1){
    stage="Early blastocyst";
} else if (number==2){
    stage="Blastocyst";
} else if (number==3){
    stage="Expanded blastocyst";
} else if (number==4){
    stage="Hatching/Hatching blastocyst";
} else {
    stage="กรุณาป้อนข้อมูลใหม่";
}
    console.log(stage);

//โปรแกรมเลขคู่คี่
let x=100;
if (x%2 == 0){
    console.log("เลขคู่");
} else {
    console.log("เลขคี่");
}

//โปรแกรมเปรียบเทียบตัวเลข
let x=50 , y=100;
if (x>y){
    console.log("x = ",x);
    console.log("y = ",y);
    console.log("x มีค่ามากกว่า y");
} else if (x<y){
    console.log("x = ",x);
    console.log("y = ",y);
    console.log("x มีค่าน้อยกว่า y");
} else {
    console.log("x = ",x);
    console.log("y = ",y);
    console.log("x มีค่าเท่ากับ y");
}

//while 
let album=1;
while (album<=20){
    console.log("album No. ",album);
    if (album==10){
        break;
    }
    album++;
}
//for loop
for (let count=1;count<=100;count+=10){
    console.log(count);
}
    console.log("Stop working");
//do...while
let product=1;
do {
    console.log("product = ",product);
}while (product>20);
//null,undefined,Nan
let a;
    console.log(a);
let b=null;
    if (!b){
        console.log("b is null");
    }else{
        console.log("b is not null");
    }
let c=10-"x";
    console.log(c);

//function ไม่มีการรับส่งค่า
function aespa(){
    alert("aespa in Kwangya");
}
aespa();
//function รับค่ามาทำงาน
function summation(a,b){
    let SUM=a+b;
    console.log("SUM = ",SUM);
}
summation(10,20);
//function ส่งค่ามาทำงาน
function getName(){
    let who="Black mamba";
    return who;
} console.log("We against the villain, What's the name?",getName());
//function รับและส่งค่ามาทำงาน
function income(salary,bonus,ot,late){
    return salary+bonus+ot-late;
} 
let INCOME=income(100000,50000,50000,10000);
console.log("INCOME",INCOME);
//function แบบกำหนดค่าเริ่มต้น
function detail(fname,lname,address="bangkok"){
    console.log("First name = ",fname,"Last name = ",lname,"Address = ",address);
}
detail("Kade","Sone");

//variable
let a=100; //global
function display(){
    let a=500; //local
    console.log("a in function =",a);   
}
    console.log("a out funtion = ",a);
    display();

//Array properties and funtion
let gg=["Taeyeon","Sunny","Tiffany","Hyoyeon","Yuri","Sooyoung","Yoona","Seohyeon"];
    console.log("Before edit:",gg);
    gg.push("Jessica");
    console.log("Number of SNSD:",gg.length);
    console.log("Member of SNSD(SORT NAME:)",gg.sort());

//array for loop
let gg=["Taeyeon","Jessica","Sunny","Tiffany","Hyoyeon","Yuri","Sooyoung","Yoona","Seohyeon"];
for (let i=0;i<gg.length;i++){
    console.log("Member",(i+1)+".","name : ",gg[i]);
}
//array forEach
let gg=["Taeyeon","Jessica","Sunny","Tiffany","Hyoyeon","Yuri","Sooyoung","Yoona","Seohyeon"];
gg.forEach(snsd);
function snsd(member){
    console.log("Member name : ",member);
}
//array to string
let gg=["Taeyeon","Jessica","Sunny","Tiffany","Hyoyeon","Yuri","Sooyoung","Yoona","Seohyeon"];
let s=gg.toString();
console.log(s);
let j=gg.join(" ");
console.log(j);
console.log(gg.pop());
console.log(gg);

//รวมarray
let snsd=["taeyeon","Jessica","Sunny","Tiffany","Hyoyeon","Yuri","Sooyoung","Yoona","Seohyeon"];
let fx=["Victoria","Amber","Luna","Krystal","Sulli"];
let rvv=["irene","seulgi","wendy","joy","yeri"];
let aes=["karina","geselle","winter","ningning"];
console.log(snsd);
console.log(rvv);
console.log(rvv);
console.log(aes);
let smgg=snsd.concat(fx,rvv,aes);
console.log("SMGG : ",smgg.join(" "));

//เรียงลำดับ array แบบตัวเลข
let points=[20,-20,-4,0,200,50,1000,-100];
console.log("Quiz",points);
let less=points.sort(function(a,b){
    return a-b;
})  
    console.log(less);
let much=points.sort(function(a,b){
    return b-a;
})  
    console.log(much);

//Js object
let spect = {
    name:"Macbook",
    price:100000,
    size:"13 inch",
    company:"Apple"
};
    console.log("Product ",spect.name);
    console.log("Price ",spect.price);
    console.log("Size ",spect.size);
    console.log("Company ",spect.company);

//Js method
let spect = {
    name:"Macbook",
    price:100000,
    size:"13 inch",
    company:"Apple",
    display:function(){
        return " Product:"+this.name+" Price:"+this.price+" Size:"+this.size+" Company:"+this.company;
    },
    discount:function(){
        return this.price-5000;
    }
};
    console.log(spect.display());
    console.log("Pay with coupon = ",spect.discount());

//confirm
function kwangya(){
    let abc=confirm("ท่าต้องการเข้าสู่กวังยาใช่หรือไม่");
    if(abc){
        console.log("Welcome to Kwangya");
    } else {
        console.log("Bye");
    }
}