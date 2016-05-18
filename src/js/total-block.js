var totalBlock = (function() {


  function render() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");

    for (var i = 0; i < all_totalBlockBonuses.length; i++) {

      var path = all_totalBlockBonuses[i].dataset.bonusPath;
      var totalBlock = helper.getClosest(all_totalBlockBonuses[i], ".js-total-block");

      if (path) {
        var data = helper.getObject(sheet.getCharacter(), path);
        for (var j in data) {
          if (data[j]) {
            if (j == "str_bonus") {
              totalBlock.dataset.strBonus = "true";
            };
            if (j == "dex_bonus") {
              totalBlock.dataset.dexBonus = "true";
            };
            if (j == "con_bonus") {
              totalBlock.dataset.conBonus = "true";
            };
            if (j == "int_bonus") {
              totalBlock.dataset.intBonus = "true";
            };
            if (j == "wis_bonus") {
              totalBlock.dataset.wisBonus = "true";
            };
            if (j == "cha_bonus") {
              totalBlock.dataset.chaBonus = "true";
            };
            if (j == "bab") {
              totalBlock.dataset.babBonus = "true";
            };
            if (j == "size") {
              totalBlock.dataset.sizeBonus = "true";
            };
            if (j == "special_size") {
              totalBlock.dataset.specialSizeBonus = "true";
            };
            if (j == "level") {
              totalBlock.dataset.levelBonus = "true";
            };
            if (j == "half_level") {
              totalBlock.dataset.halfLevelBonus = "true";
            };
            if (j == "plus_ten") {
              totalBlock.dataset.plusTenBonus = "true";
            };
            if (j == "ac_armor") {
              totalBlock.dataset.acArmor = "true";
            };
            if (j == "ac_shield") {
              totalBlock.dataset.acShield = "true";
            };
            if (j == "ac_deflect") {
              totalBlock.dataset.acDeflect = "true";
            };
            if (j == "ac_dodge") {
              totalBlock.dataset.acDodge = "true";
            };
            if (j == "ac_natural") {
              totalBlock.dataset.acNatural = "true";
            };
            if (j == "class_skill") {
              totalBlock.dataset.classSkill = "true";
            };
          };

        };
      };
    };
  };

  function update() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      var statsStrModifier = helper.e(".js-stats-str-modifier");
      var statsDexModifier = helper.e(".js-stats-dex-modifier");
      var statsConModifier = helper.e(".js-stats-con-modifier");
      var statsIntModifier = helper.e(".js-stats-int-modifier");
      var statsWisModifier = helper.e(".js-stats-wis-modifier");
      var statsChaModifier = helper.e(".js-stats-cha-modifier");
      var statsStrModifierTemp = helper.e(".js-stats-str-modifier-temp");
      var statsDexModifierTemp = helper.e(".js-stats-dex-modifier-temp");
      var statsConModifierTemp = helper.e(".js-stats-con-modifier-temp");
      var statsIntModifierTemp = helper.e(".js-stats-int-modifier-temp");
      var statsWisModifierTemp = helper.e(".js-stats-wis-modifier-temp");
      var statsChaModifierTemp = helper.e(".js-stats-cha-modifier-temp");
      var strBonus = 0;
      var dexBonus = 0;
      var conBonus = 0;
      var intBonus = 0;
      var wisBonus = 0;
      var chaBonus = 0;
      var babBonus = 0;
      var sizeBonus = 0;
      var specialSizeBonus = 0;
      var levelBonus = 0;
      var halfLevelBonus = 0;
      var plusTenBonus = 0;
      var acArmor = 0;
      var acShield = 0;
      var acDeflect = 0;
      var acDodge = 0;
      var acNatural = 0;
      var classSkill = 0;
      // str
      if (all_totalBlock[i].dataset.strBonus == "true" || all_totalBlock[i].dataset.strBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsStrModifierTemp.textContent == "") {
          strBonus = parseInt(statsStrModifier.textContent, 10 || 0);
        } else {
          strBonus = parseInt(statsStrModifierTemp.textContent, 10 || 0);
        };
      };
      // dex
      if (all_totalBlock[i].dataset.dexBonus == "true" || all_totalBlock[i].dataset.dexBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsDexModifierTemp.textContent == "") {
          dexBonus = parseInt(statsDexModifier.textContent, 10 || 0);
        } else {
          dexBonus = parseInt(statsDexModifierTemp.textContent, 10 || 0);
        };
      };
      // con
      if (all_totalBlock[i].dataset.conBonus == "true" || all_totalBlock[i].dataset.conBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsConModifierTemp.textContent == "") {
          conBonus = parseInt(statsConModifier.textContent, 10 || 0);
        } else {
          conBonus = parseInt(statsConModifierTemp.textContent, 10 || 0);
        };
      };
      // int
      if (all_totalBlock[i].dataset.intBonus == "true" || all_totalBlock[i].dataset.intBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsIntModifierTemp.textContent == "") {
          intBonus = parseInt(statsIntModifier.textContent, 10 || 0);
        } else {
          intBonus = parseInt(statsIntModifierTemp.textContent, 10 || 0);
        };
      };
      // wis
      if (all_totalBlock[i].dataset.wisBonus == "true" || all_totalBlock[i].dataset.wisBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsWisModifierTemp.textContent == "") {
          wisBonus = parseInt(statsWisModifier.textContent, 10 || 0);
        } else {
          wisBonus = parseInt(statsWisModifierTemp.textContent, 10 || 0);
        };
      };
      // cha
      if (all_totalBlock[i].dataset.chaBonus == "true" || all_totalBlock[i].dataset.chaBonusDefault == "true") {
        // if ability temp mod is empty
        if (statsChaModifierTemp.textContent == "") {
          chaBonus = parseInt(statsChaModifier.textContent, 10 || 0);
        } else {
          chaBonus = parseInt(statsChaModifierTemp.textContent, 10 || 0);
        };
      };
      // bab
      if (all_totalBlock[i].dataset.babBonus == "true" || all_totalBlock[i].dataset.babBonusDefault == "true") {
        babBonus = parseInt(helper.e("#offense-base-attack").value, 10 || 0);
      };
      // size
      if (all_totalBlock[i].dataset.sizeBonus == "true" || all_totalBlock[i].dataset.sizeBonusDefault == "true") {
        sizeBonus = parseInt(helper.e("#defense-ac-size-bonus").value, 10 || 0);
      };
      // special size
      if (all_totalBlock[i].dataset.specialSizeBonus == "true" || all_totalBlock[i].dataset.specialSizeBonusDefault == "true") {
        specialSizeBonus = parseInt(helper.e("#offense-special-size-bonus").value, 10 || 0);
      };
      // level
      if (all_totalBlock[i].dataset.levelBonus == "true" || all_totalBlock[i].dataset.levelBonusDefault == "true") {
        levelBonus = parseInt(helper.e("#basics-level").value, 10 || 0);
      };
      // half level
      if (all_totalBlock[i].dataset.halfLevelBonus == "true" || all_totalBlock[i].dataset.halfLevelBonusDefault == "true") {
        halfLevelBonus = Math.floor(parseInt(helper.e("#basics-level").value, 10 || 0) / 2);
      };
      // ac armor
      if (all_totalBlock[i].dataset.acArmor == "true" || all_totalBlock[i].dataset.acArmorDefault == "true") {
        acArmor = parseInt(helper.e("#defense-ac-armor").value, 10 || 0);
      };
      // ac shield
      if (all_totalBlock[i].dataset.acShield == "true" || all_totalBlock[i].dataset.acShieldDefault == "true") {
        acShield = parseInt(helper.e("#defense-ac-shield").value, 10 || 0);
      };
      // ac deflect
      if (all_totalBlock[i].dataset.acDeflect == "true" || all_totalBlock[i].dataset.acDeflectDefault == "true") {
        acDeflect = parseInt(helper.e("#defense-ac-deflect").value, 10 || 0);
      };
      // ac dodge
      if (all_totalBlock[i].dataset.acDodge == "true" || all_totalBlock[i].dataset.acDodgeDefault == "true") {
        acDodge = parseInt(helper.e("#defense-ac-dodge").value, 10 || 0);
      };
      // ac natural
      if (all_totalBlock[i].dataset.acNatural == "true" || all_totalBlock[i].dataset.acNaturalDefault == "true") {
        acNatural = parseInt(helper.e("#defense-ac-natural").value, 10 || 0);
      };
      // class skill
      if (all_totalBlock[i].dataset.classSkill == "true" || all_totalBlock[i].dataset.classSkillDefault == "true") {
        classSkill = 3;
      };
      // 10
      if (all_totalBlock[i].dataset.plusTenBonus == "true" || all_totalBlock[i].dataset.plusTenBonusDefault == "true") {
        plusTenBonus = 10;
      };
      // check if any bonus is NaN
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(strBonus)) {
        strBonus = 0;
      };
      if (isNaN(dexBonus)) {
        dexBonus = 0;
      };
      if (isNaN(conBonus)) {
        conBonus = 0;
      };
      if (isNaN(intBonus)) {
        intBonus = 0;
      };
      if (isNaN(wisBonus)) {
        wisBonus = 0;
      };
      if (isNaN(chaBonus)) {
        chaBonus = 0;
      };
      if (isNaN(babBonus)) {
        babBonus = 0;
      };
      if (isNaN(sizeBonus)) {
        sizeBonus = 0;
      };
      if (isNaN(specialSizeBonus)) {
        specialSizeBonus = 0;
      };
      if (isNaN(levelBonus)) {
        levelBonus = 0;
      };
      if (isNaN(plusTenBonus)) {
        plusTenBonus = 0;
      };
      if (isNaN(acArmor)) {
        acArmor = 0;
      };
      if (isNaN(acShield)) {
        acShield = 0;
      };
      if (isNaN(acDeflect)) {
        acDeflect = 0;
      };
      if (isNaN(acDodge)) {
        acDodge = 0;
      };
      if (isNaN(acNatural)) {
        acNatural = 0;
      };
      if (isNaN(classSkill)) {
        classSkill = 0;
      };
      var total = all_totalBlock[i].querySelector(".js-total-block-total");
      var path = total.dataset.path;
      var all_inputBlockField = all_totalBlock[i].querySelectorAll(".js-input-block-field");
      var modifiers = [];
      var modifiers_total = 0;
      for (var q = 0; q < all_inputBlockField.length; q++) {
        if (all_inputBlockField.length > 0) {
          if (all_inputBlockField[q].dataset.total == "addition") {
            modifiers.push(parseInt(all_inputBlockField[q].value, 10) || 0);
          };
          if (all_inputBlockField[q].dataset.total == "subtract") {
            modifiers.push(-parseInt(all_inputBlockField[q].value, 10) || 0);
          };
        };
      };
      // if modifiers array has values total them
      if (modifiers.length > 0) {
        modifiers_total = modifiers.reduce(function(a, b) {
          return a + b;
        });
      };
      // grand total
      var grandTotal = modifiers_total + levelBonus + halfLevelBonus + babBonus + sizeBonus + specialSizeBonus + plusTenBonus + strBonus + dexBonus + conBonus + intBonus + wisBonus + chaBonus + acArmor + acShield + acDeflect + acDodge + acNatural + classSkill;
      // update total
      total.textContent = grandTotal;
      // store current to character object
      if (path) {
        helper.updateObject(sheet.getCharacter(), path, parseInt(total.innerHTML, 10));
      };
    };
    sheet.storeCharacters();
  };

  function _store(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var path = input.dataset.path;
    helper.updateObject(sheet.getCharacter(), path, input.checked);
    sheet.storeCharacters();
  };

  function bonusTextLable(bonusType) {
    if (bonusType == "str-bonus" || bonusType == "str_bonus") {
      return "Str Bonus";
    };
    if (bonusType == "dex-bonus" || bonusType == "dex_bonus") {
      return "Dex Bonus";
    };
    if (bonusType == "con-bonus" || bonusType == "con_bonus") {
      return "Con Bonus";
    };
    if (bonusType == "int-bonus" || bonusType == "int_bonus") {
      return "Int Bonus";
    };
    if (bonusType == "wis-bonus" || bonusType == "wis_bonus") {
      return "Wis Bonus";
    };
    if (bonusType == "cha-bonus" || bonusType == "cha_bonus") {
      return "Cha Bonus";
    };
    if (bonusType == "bab") {
      return "BAB Bonus";
    };
    if (bonusType == "size") {
      return "Size Bonus";
    };
    if (bonusType == "special-size" || bonusType == "special_size") {
      return "Special Size Bonus";
    };
    if (bonusType == "level") {
      return "Level";
    };
    if (bonusType == "half-level" || bonusType == "half_level") {
      return "Half Level";
    };
    if (bonusType == "plus-ten" || bonusType == "plus_ten") {
      return "Plus 10";
    };
    if (bonusType == "ac-armor" || bonusType == "ac_armor") {
      return "Armor";
    };
    if (bonusType == "ac-shield" || bonusType == "ac_shield") {
      return "Shield";
    };
    if (bonusType == "ac-deflect" || bonusType == "ac_deflect") {
      return "Deflect";
    };
    if (bonusType == "ac-dodge" || bonusType == "ac_dodge") {
      return "Dodge";
    };
    if (bonusType == "ac-natural" || bonusType == "ac_natural") {
      return "Natural Armor";
    };
    if (bonusType == "class-skill" || bonusType == "class_skill") {
      return "Class Skill";
    };
  };

  function _totalBlockModalContent(element) {

    var totalBlock = helper.getClosest(element, ".js-total-block");
    var path = element.dataset.bonusPath;

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    if (path) {
      var data = helper.getObject(sheet.getCharacter(), path);
      for (var i in data) {

        var col = document.createElement("div");
        col.setAttribute("class", "col-xs-6 col-xl-4");

        var div = document.createElement("div");
        div.setAttribute("class", "m-total-block-toggle js-total-block-toggle");

        var input = document.createElement("input");
        input.setAttribute("id", i.replace(/_+/g, "-"));
        input.setAttribute("class", "m-total-block-toggle-check js-total-block-toggle-check");
        input.setAttribute("data-path", path + "." + i);
        input.setAttribute("data-bonus-type", i.replace(/_+/g, "-"));
        input.setAttribute("type", "checkbox");
        input.setAttribute("tabindex", "3");
        input.checked = data[i];

        var label = document.createElement("label");
        label.setAttribute("for", i.replace(/_+/g, "-"));
        label.setAttribute("class", "u-full-width");
        label.textContent = bonusTextLable(i);

        div.appendChild(input);
        div.appendChild(label);
        col.appendChild(div);
        row.appendChild(col);

        _bind_bonusType(input, totalBlock);

      };
    };

    container.appendChild(row);
    modal.render(container, "Done");

  };

  function _bind_bonusType(element, totalBlock) {
    element.addEventListener("change", function() {
      _addRemoveBonus(this, totalBlock);
      _store(this, totalBlock);
      update();
    }, false);
  };

  function bind() {
    var all_totalBlockBonuses = helper.eA(".js-total-block-bonuses");
    for (var i = 0; i < all_totalBlockBonuses.length; i++) {
      var totalBlock = all_totalBlockBonuses[i].querySelector(".js-total-block");
      all_totalBlockBonuses[i].addEventListener("click", function() {
        _totalBlockModalContent(this);
      }, false);
    };
  };

  function _addRemoveBonus(input, totalBlock) {
    var totalBlock = helper.getClosest(input, ".js-total-block") || totalBlock;
    var bonusType = input.dataset.bonusType;
    if (input.checked) {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "true";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "true";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "true";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "true";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "true";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "true";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "true";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "true";
      };
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "true";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "true";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "true";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "true";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "true";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "true";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "true";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "true";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "true";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "true";
      };
    } else {
      if (bonusType == "str-bonus") {
        totalBlock.dataset.strBonus = "false";
      };
      if (bonusType == "dex-bonus") {
        totalBlock.dataset.dexBonus = "false";
      };
      if (bonusType == "con-bonus") {
        totalBlock.dataset.conBonus = "false";
      };
      if (bonusType == "int-bonus") {
        totalBlock.dataset.intBonus = "false";
      };
      if (bonusType == "wis-bonus") {
        totalBlock.dataset.wisBonus = "false";
      };
      if (bonusType == "cha-bonus") {
        totalBlock.dataset.chaBonus = "false";
      };
      if (bonusType == "bab") {
        totalBlock.dataset.babBonus = "false";
      };
      if (bonusType == "size") {
        totalBlock.dataset.sizeBonus = "false";
      };
      if (bonusType == "special-size") {
        totalBlock.dataset.specialSizeBonus = "false";
      };
      if (bonusType == "level") {
        totalBlock.dataset.levelBonus = "false";
      };
      if (bonusType == "half-level") {
        totalBlock.dataset.halfLevelBonus = "false";
      };
      if (bonusType == "plus-ten") {
        totalBlock.dataset.plusTenBonus = "false";
      };
      if (bonusType == "ac-armor") {
        totalBlock.dataset.acArmor = "false";
      };
      if (bonusType == "ac-shield") {
        totalBlock.dataset.acShield = "false";
      };
      if (bonusType == "ac-deflect") {
        totalBlock.dataset.acDeflect = "false";
      };
      if (bonusType == "ac-dodge") {
        totalBlock.dataset.acDodge = "false";
      };
      if (bonusType == "ac-natural") {
        totalBlock.dataset.acNatural = "false";
      };
      if (bonusType == "class-skill") {
        totalBlock.dataset.classSkill = "false";
      };
    };
  };


  function clear() {
    var all_totalBlock = helper.eA(".js-total-block");
    for (var i = 0; i < all_totalBlock.length; i++) {
      delete all_totalBlock[i].dataset.strBonus;
      delete all_totalBlock[i].dataset.dexBonus;
      delete all_totalBlock[i].dataset.conBonus;
      delete all_totalBlock[i].dataset.intBonus;
      delete all_totalBlock[i].dataset.wisBonus;
      delete all_totalBlock[i].dataset.chaBonus;
      delete all_totalBlock[i].dataset.babBonus;
      delete all_totalBlock[i].dataset.sizeBonus;
      delete all_totalBlock[i].dataset.specialSizeBonus;
      delete all_totalBlock[i].dataset.levelBonus;
      delete all_totalBlock[i].dataset.halfLevelBonus;
      delete all_totalBlock[i].dataset.plusTenBonus;
      delete all_totalBlock[i].dataset.acArmor;
      delete all_totalBlock[i].dataset.acShield;
      delete all_totalBlock[i].dataset.acDeflect;
      delete all_totalBlock[i].dataset.acDodge;
      delete all_totalBlock[i].dataset.acNatural;
      delete all_totalBlock[i].dataset.classSkill;
    };
  };

  // exposed methods
  return {
    clear: clear,
    bind: bind,
    update: update,
    render: render
  };

})();
