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

c1();                       //1, increements and prints
c2();                       //2, c2 and c1 shares same memory so increements and prints
c1();                       //3, again updates the value saved by c2 and prints 3
c3();                       //1, c3 shares different memory so updates it from 0 to 1 and prints it