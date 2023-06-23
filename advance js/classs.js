
        // let s1 = {
        //     name: "pankaj",
        //     age: 24,
        // };
        // let s2 = {
        //     name: "aryan",
        //     age: 18,
        // };




        class User {
            constructor(name, age, addr) {
                this.name = name;
                this.age = age;
                this.addr = addr; // Fixed the assignment of addr
            }
        
            print(str) {
                console.log(`${str}`, this.name);
            }
        
            printAge(agtr) {
                console.log(`${agtr}`, this.age);
            }
        
            printAddr(ad) {
                console.log(`${ad}`, this.addr);
            }
        }
        
        let surat = 'surat';
        
        let aryan = new User("aryan", 18, surat);
        let pankaj = new User("pankaj", 24, surat);
        let pratik = new User("pratik", 24, surat);
        
        aryan.print("my name is:");
        aryan.printAge("my age is:");
        aryan.printAddr("My address is:");
        
        pankaj.print("my name is:");
        pankaj.printAge("my age is:");
        pankaj.printAddr("My address is:");
        
        pratik.print("my name is:");
        pratik.printAge("my age is:");
        pratik.printAddr("My address is:");
        
        let name = "aryan";
        let name1 = "pankaj";
        let name2 = "pratik";
        

        
