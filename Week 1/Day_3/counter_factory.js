function counterFactory(){
    let x = 0;

    return function inner(){
        x++
        console.log(x);
    };
}

c1 = counterFactory();
c2 = c1;                    //c1 and c2 shares same memory
c3 = counterFactory();      //c3 has different memory

c1();
c2();
c1();
c3();