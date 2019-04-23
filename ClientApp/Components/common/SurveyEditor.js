import React, { Component } from "react";
import * as SurveyJSEditor from "surveyjs-editor";
import * as SurveyKo from "survey-knockout";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(SurveyKo, $);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

class SurveyEditor extends Component {
  editor;
  componentDidMount() {
    let editorOptions = { showEmbededSurveyTab: true };
    this.editor = new SurveyJSEditor.SurveyEditor(
      "surveyEditorContainer",
      editorOptions
    );
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  render() {
    return <div id="surveyEditorContainer"/>;
  }
  saveMySurvey = () => {
    //console.log(JSON.stringify(this.editor.text));
    console.log(this.editor);
    this.props.saveMySurvey(JSON.stringify(this.editor.text));
  };
}

export default SurveyEditor;
