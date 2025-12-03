function employees(array){
    let person = {}

        for(const element of array){
            person.name = element
            person.personalNumber = element.length
            console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
        }

}

