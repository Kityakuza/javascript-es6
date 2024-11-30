let height = undefined;
function checkResult(height) {
    return height ?? "Height is not defined"
}
let result = checkResult(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
