const dagre = require("@dagrejs/dagre")
console.log("Type of dagre:", typeof dagre)
console.log("Keys of dagre:", Object.keys(dagre))
if (dagre.layout) {
  console.log("dagre.layout exists")
} else {
  console.log("dagre.layout does NOT exist")
}

try {
  const dagreDefault = require("@dagrejs/dagre").default
  console.log("Type of dagre.default:", typeof dagreDefault)
  if (dagreDefault && dagreDefault.layout) {
    console.log("dagre.default.layout exists")
  }
} catch (e) {
  console.log("Error checking default:", e.message)
}
