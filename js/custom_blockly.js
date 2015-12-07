Blockly.Blocks['input_html'] = {
  init: function() {
    this.appendStatementInput("HTML")
        .setCheck("String")
        .appendField("html");
    this.setInputsInline(false);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#7bp9ff');
  }
};

Blockly.JavaScript['input_html'] = function(block) {
  var statements_html = Blockly.JavaScript.statementToCode(block, 'HTML');
  // TODO: Assemble JavaScript into code variable.
  var code = '<html></html>';
  alert(code);
  return code;
};

Blockly.Blocks['input_head'] = {
  init: function() {
    this.appendStatementInput("HEAD")
        .setCheck("String")
        .appendField("head");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hefqcj');
  }
};

Blockly.Blocks['input_title'] = {
  init: function() {
    this.appendValueInput("TITLE")
        .setCheck("String")
        .appendField("title");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8utvs5');
  }
};

Blockly.Blocks['input_body'] = {
  init: function() {
    this.appendStatementInput("BODY")
        .setCheck("String")
        .appendField("body");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ir3hge');
  }
};
