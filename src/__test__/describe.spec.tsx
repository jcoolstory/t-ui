import { drinkFlavor } from "./dummy";
import { sum } from "./util";

describe("입력 A: 예외 처리 테스트", () => {
  test("공백만 입력되면 오류가 발생합니다", () => {});
  test("문자를 입력하면 오류가 발생합니다", () => {});
  test("3자리가 아닌 숫자를 입력하면 오류가 발생합니다", () => {});

});
describe("입력 B: 예외 처리 테스트", () => {
  test("1이나 2 이외의 값을 입력하면 오류가 발생합니다", () => {});
});

describe("test 묶음 ", () => {
  test('renders learn react link', () => {
    expect(sum([1, 2])).toBe(3);
    expect(sum([1, 3,2])).to
    
  });
  
  
  test('throws on octopus', () => {
    function drinkOctopus() {
      drinkFlavor('octopus');
    }
  
    // Test that the error message says "yuck" somewhere: these are equivalent
    expect(drinkOctopus).toThrow(/yuck/);
    expect(drinkOctopus).toThrow('yuck');
  
    // Test the exact error message
    expect(drinkOctopus).toThrow(/^yuck, octopus flavor$/);
    expect(drinkOctopus).toThrow(new Error('yuck, octopus flavor'));
  
  });
})


// beforeEach() 
// afterEach()
// beforeAll() 
// afterAll()

describe("전후 펑션 테스트", () => {
  beforeEach( ()=> {
    console.log("=== beforeEach", )
  })

  afterEach( ()=> {
    console.log("=== afterEach", )
  })

  beforeAll( ()=> {
    console.log("=== beforeAll", )
  })

  afterAll( ()=> {
    console.log("=== afterAll", )
  })
  test("공백만 입력되면 오류가 발생합니다", () => {});
  test("문자를 입력하면 오류가 발생합니다", () => {});
  test("3자리가 아닌 숫자를 입력하면 오류가 발생합니다", () => {});

});