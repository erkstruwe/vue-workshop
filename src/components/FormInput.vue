<template>
    <div>
        <h1>Form input</h1>

        <h2>Info</h2>

        <h3>Basic usage</h3>
        <p>In order to sync your component's data with input elements, use the <a href=""><code>v-model</code></a> directive. This way, changes to your data are reflected in the DOM and vice versa (two-way data binding).</p>
        <p>Using the basic syntax, all data is kept as a string. The only exceptions are <a href="https://vuejs.org/v2/guide/forms.html#Checkbox">checkboxes</a>, which have boolean values, and input elements bound with the <a href="https://vuejs.org/v2/guide/forms.html#number"><code>.number</code></a> modifier (which are numbers, obviously).</p>
        <div class="form-group"><input type="text" class="form-control" v-model="text">{{JSON.stringify(text)}}</div>
        <div class="form-group"><input type="text" class="form-control" :value="text" @input="text = $event.target.value">{{JSON.stringify(text)}}</div>
        <div class="form-group"><input type="number" class="form-control" v-model.number="number">{{JSON.stringify(number)}}</div>
        <div class="form-group"><textarea class="form-control" v-model="textarea"></textarea>{{JSON.stringify(textarea)}}</div>
        <div class="form-group"><select class="form-control" v-model="select"><option disabled value="">Please select</option><option value="one">one</option><option value="two">two</option></select>{{JSON.stringify(select)}}</div>
        <div class="form-group">
            <div class="form-check">
                <input type="radio" class="form-check-input" v-model="radio" value="one">
                <label>one</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" v-model="radio" value="two">
                <label>two</label>
            </div>
            {{JSON.stringify(radio)}}
        </div>
        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="checkbox">
                <label>on/off</label>
            </div>
            {{JSON.stringify(checkbox)}}
        </div>

        <h3>Value binding</h3>
        <p>If you need to bind to other data types, use the <a href="https://vuejs.org/v2/guide/forms.html#Value-Bindings"><code>:value</code> directive</a>.</p>
        <div class="form-group">
            <div class="form-check">
                <input type="radio" class="form-check-input" v-model="radioValue" :value="{title: 'one', myValue: 1}">
                <label>one</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" v-model="radioValue" :value="{title: 'two', myValue: 2}">
                <label>two</label>
            </div>
            {{JSON.stringify(radioValue)}}
        </div>

        <h3>Array usage</h3>
        <p>In order to have your users choose multiple values you can use a group of checkboxes or a multi-select.</p>
        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="multiCheckbox">
                <label>Bumblebee</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="multiCheckbox">
                <label>Kangaroo</label>
            </div>
            {{JSON.stringify(checkbox)}}
        </div>
        <div class="form-group"><select multiple class="form-control" v-model="multiSelect"><option value="one">one</option><option value="two">two</option></select>{{JSON.stringify(multiSelect)}}</div>

        <h2>Exercise</h2>
        <h3 id="form-input-heading">Not yet fancy heading</h3>
        <p>Use the following input fields to make the heading above fancy.</p>
        <div class="form-group">
            <label>Background color</label>
            <input type="text" id="form-input-background-color" class="form-control">
        </div>
        <div class="form-group">
            <label>Applicable styles</label>
            <select id="form-input-style" class="form-control">
                <option :value="null">None</option>
            </select>
        </div>
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
