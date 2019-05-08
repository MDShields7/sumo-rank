const input = require('./input');

describe('Rank Input Test Suite', function () {

  it(' "rank", "Y2E" ', () => {
    expect(() => {
      input("rank", "Y2E");
    }).toEqual(["Y", "2", "E"]);
  });
  //   it(' "rank", "M 16 W" ', () => {
  //     expect(() => {
  //       input("rank", "M 16 W");
  //     }).toEqual(["M", "16", "W"]);
  //   });
  //   it(' "rank", "Komisubi 1 west" ', () => {
  //     expect(() => {
  //       input("rank", "Komisubi 1 west");
  //     }).toEqual(["Komisubi", "1", "west"]);
  //   });
  //   it(' "rank", "Maegashira 12 East" ', () => {
  //     expect(() => {
  //       input("rank", "Maegashira 12 East");
  //     }).toEqual(["Maegashira", "12", "East"]);
  //   });
  //   it('input throws Error SR.001 from no parameter', () => {
  //     expect(() => {
  //       input("rank");
  //     }).toThrow(/SR.001/);
  //   });
  //   it('input throws Error SR.301 from boolean', () => {
  //     expect(() => {
  //       input("rank", true);
  //     }).toThrow(/SR.301/);
  //   });
  //   it('input throws Error SR.301 from number', () => {
  //     expect(() => {
  //       input("rank", 123);
  //     }).toThrow(/SR.301/);
  //   });
  //   it('input throws Error SR.301 from array', () => {
  //     expect(() => {
  //       input("rank", []);
  //     }).toThrow(/SR.301/);
  //   });
  //   it('input throws Error SR.301 from object', () => {
  //     expect(() => {
  //       input("rank", {});
  //     }).toThrow(/SR.301/);
  //   });
  //   it('input throws Error SR.302 from empty string', () => {
  //     expect(() => {
  //       input("rank", "");
  //     }).toThrow(/SR.302/);
  //   });
  //   it('input throws Error SR.303 from blank string', () => {
  //     expect(() => {
  //       input("rank", "          ");
  //     }).toThrow(/SR.303/);
  //   });
  //   it('input throws Error SR.304 from "abcd"', () => {
  //     expect(() => {
  //       input("rank", "abcd");
  //     }).toThrow(/SR.304/);
  //   });
  //   it('input throws Error SR.304 from "$%^&"', () => {
  //     expect(() => {
  //       input("rank", "$%^&");
  //     }).toThrow(/SR.304/);
  //   });
  //   it('input throws Error SR.305 from "Y y"', () => {
  //     expect(() => {
  //       input("rank", "Y y");
  //     }).toThrow(/SR.305/);
  //   });
  //   it('input throws Error SR.305 from "Nn n"', () => {
  //     expect(() => {
  //       input("rank", "S s");
  //     }).toThrow(/SR.305/);
  //   });
  //   it('input throws Error SR.305 from "1 2"', () => {
  //     expect(() => {
  //       input("rank", "1 2");
  //     }).toThrow(/SR.305/);
  //   });
  // });
  // describe('Format Input Test Suite', function () {

  //   // it('input "Nn # Dd" yields ["Nn"," ","#"," ","Dd"]', () => {
  //   //   expect(input("rank", "Nn # Dd" ))
  //   //   .toBe(["Nn"," ","#"," ","Dd"]);
  //   // });

  //   it('input throws Error SR.401 from boolean', () => {
  //     expect(() => {
  //       input("format", true);
  //     }).toThrow(/SR.401/);
  //   });
  //   it('input throws Error SR.401 from number', () => {
  //     expect(() => {
  //       input("format", 123);
  //     }).toThrow(/SR.401/);
  //   });
  //   it('input throws Error SR.401 from array', () => {
  //     expect(() => {
  //       input("format", []);
  //     }).toThrow(/SR.401/);
  //   });
  //   it('input throws Error SR.401 from object', () => {
  //     expect(() => {
  //       input("format", {});
  //     }).toThrow(/SR.401/);
  //   });
  //   it('input throws Error SR.402 from empty string', () => {
  //     expect(() => {
  //       input("format", "");
  //     }).toThrow(/SR.402/);
  //   });
  //   it('input throws Error SR.403 from blank string', () => {
  //     expect(() => {
  //       input("format", "          ");
  //     }).toThrow(/SR.403/);
  //   });
  //   it('input throws Error SR.404 from "abcd"', () => {
  //     expect(() => {
  //       input("format", "abcd");
  //     }).toThrow(/SR.404/);
  //   });
  //   it('input throws Error SR.404 from "$%^&"', () => {
  //     expect(() => {
  //       input("format", "$%^&");
  //     }).toThrow(/SR.404/);
  //   });
  //   it('input throws Error SR.405 from "dDd"', () => {
  //     expect(() => {
  //       input("format", "dDn");
  //     }).toThrow(/SR.405/);
  //   });
  //   it('input throws Error SR.405 from "Nn n"', () => {
  //     expect(() => {
  //       input("format", "Nn n");
  //     }).toThrow(/SR.405/);
  //   });
  //   it('input throws Error SR.405 from "# #"', () => {
  //     expect(() => {
  //       input("format", "# #");
  //     }).toThrow(/SR.405/);
  //   });
});