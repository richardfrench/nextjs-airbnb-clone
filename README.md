# CRUK technical exercise (React)

## Task details

- You will be building a form using Formik and our CRUK React Component Library.
- This form which will fetch assets from the NASA Images and Video Library API.
- The fields will provide filters for the query.
- The media returned should be displayed in list below the form.
- The user should only see the first 10 items on the page. If you have time, getting this working with some form pagination is a stretch target.
- Code must be clean and production ready, quality is better than quantity.
- Feel free to edit this readme or add a new readme file for any additional information, such as what you might do improve your application in the future.
- Please do not attempt to push to this repo, ideally we would like you to create your own repo cloned from this one.

## Tools to be used

- NASA Images and Video Library API https://api.nasa.gov/
- Formik (Forms): https://formik.org/docs/overview
- Yup (Validation) https://github.com/jquense/yup
- CRUK React Component Library Storybook site: https://master.d28a8la187lo73.amplifyapp.com/
- CRUK React Component Library Package: https://www.npmjs.com/package/@cruk/cruk-react-components
- Styled Components (What the CRUK Component Library was built with) https://styled-components.com/docs

## Form fields

This form has 3 fields:

### Keywords field

| Attribute | Value    |
| :-------- | :------- |
| Label     | Keywords |
| Name      | keywords |
| Required  | true     |
| Type      | text     |
| Default   | ""       |

An error message below the field should read “Please enter keywords to search.” if the user does not fill in the field.

An error message below the field should read “Keywords must be between 2 and 50 characters.” if the field value is less than 2 or more than 50 characters long.

### Media type field

| Attribute | Value                       |
| :-------- | :-------------------------- |
| Label     | Media type                  |
| Name      | mediaType                   |
| Required  | true                        |
| Type      | select                      |
| Values    | [“audio”, “video”, “image”] |
| Default   | none                        |

An error message below the field should read “Please select a media type.” if the user does not select an option.

### Year start field

| Attribute | Value      |
| :-------- | :--------- |
| Label     | Year start |
| Name      | yearStart  |
| Required  | false      |
| Type      | text       |
| Default   | ""         |

An error message below the field should read “Please enter a valid year.” if the user enters an invalid year.

An error message below the field should read “Year must not be in the future.” if the user enters a year after the current year.

### Submit button

Submit button should change to a disabled state and label should read “Submitting…” when user clicks the submit button to submit the form. The button should return to and enabled state with label “Submit” when the API responds.

## Tests

Ensure your application has adequate test coverage.
