<template>
    <div>
        <h1>Form input</h1>

        <h2>Info</h2>

        <h3>Basic usage</h3>
        <p>In order to sync your component's data with input elements, use the <a href=""><code>v-model</code></a> directive. This way, changes to your data are reflected in the DOM and vice versa (two-way data binding).</p>
        <p>Using the basic syntax, all data is kept as a string. The only exceptions are <a href="https://vuejs.org/v2/guide/forms.html#Checkbox">checkboxes</a>, which have boolean values, and input elements bound with the <a href="https://vuejs.org/v2/guide/forms.html#number"><code>.number</code></a> modifier (which are numbers, obviously).</p>
        <p><input type="text" v-model="text">: {{JSON.stringify(text)}}</p>
        <p><input type="number" v-model.number="number">: {{JSON.stringify(number)}}</p>
        <p><textarea v-model="textarea"></textarea>: {{JSON.stringify(textarea)}}</p>
        <p><select v-model="select"><option disabled value="">Please select</option><option value="one">one</option><option value="two">two</option></select>: {{JSON.stringify(select)}}</p>
        <p><input type="radio" v-model="radio" value="one"> one, <input type="radio" v-model="radio" value="two"> two: {{JSON.stringify(radio)}}</p>
        <p><input type="checkbox" v-model="checkbox">: {{JSON.stringify(checkbox)}}</p>

        <h3>Value binding</h3>
        <p>If you need to bind to other data types, use the <a href="https://vuejs.org/v2/guide/forms.html#Value-Bindings"><code>:value</code> directive</a>.</p>
        <p><input type="radio" v-model="radioValue" :value="{title: 'one', myValue: 1}"> one, <input type="radio" v-model="radioValue" :value="{title: 'two', myValue: 2}"> two: {{JSON.stringify(radioValue)}}</p>

        <h3>Array usage</h3>
        <p>In order to have your users choose multiple values you can use a group of checkboxes or a multi-select.</p>
        <p><input type="checkbox" v-model="multiCheckbox" value="Bumblebee"> Bumblebee, <input type="checkbox" v-model="multiCheckbox" value="Kangaroo"> Kangaroo: {{JSON.stringify(multiCheckbox)}}</p>
        <p><select multiple v-model="multiSelect"><option value="one">one</option><option value="two">two</option></select>: {{JSON.stringify(multiSelect)}}</p>

        <h2>Exercise</h2>
        <h3 id="form-input-heading">Not yet fancy heading</h3>
        <p>Use the following input fields to make the heading above fancy.</p>
        <p>Background color: <input id="form-input-background-color"></p>
        <p>
            Applicable styles:
            <select id="form-input-style">
                <option :value="null">None</option>
            </select>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: "",
                number: 0,
                textarea: "",
                select: "",
                radio: "",
                checkbox: true,
                multiCheckbox: [],
                multiSelect: [],
                radioValue: null,

                heading: {
                    backgroundColor: null,
                    style: null,
                },
                availableStyles: {
                    blackPink: {
                        color: "deeppink",
                        border: "5px dotted black",
                    },
                    macaw: {
                        backgroundColor: "yellow",
                        color: "blue",
                        border: "5px dashed green",
                    },
                },
            }
        },
    }
</script>
