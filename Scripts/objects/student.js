(function(objects) {
  class Student extends objects.Person {
    constructor(name, age, studentID) {
      super(name, age);
    }

    studies() {
      console.log(`${this._name} is studying`);
    }
  }

  objects.Student = Student;
})(objects || (objects = {}));

// =====================================
//(function(objects) {
//  class Student extends objects.Person {
//    constructor(name, age, studentID) {
//      super(name, age);
//    }
//
//    studies() {
//      console.log(`${this._name} is studying`);
//    }
//  }
//
//  objects.Student = Student;
//})(objects || (objects = {}));

// ============  OLD WAY ===============
//(function(objects) {
//construcotr
//  let Student = function() {
//    function Student(name, age, studentID) {
//      objects.Person.call(this, name, age);
//      this._studentID = studentID;
//    }
//    //Prototypal inheritance
//    Student.prototype = Object.create(objects.Person.prototype);
//    Student.prototype.constructor = Student; // fix constructor
//
//    Student.prototype.studies = function() {
//      console.log(`${this._name} is studying !`);
//    };
//    return Student;
//  };
//})();
// attached student class to module object
//  objects.Student = Student;
//})(objects || (objects = {}));
//
//=========================================
