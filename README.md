# Qlik Mashup React Boilerplate

This is a boilerplate for Qlik Sense Server Mashups. It uses React, Sass, and Webpack.

## Initial Set Up

Clone the repo

then

`cd react-mashup && npm i`

## Steps

1. Go to **dev hub** (_{qlik-server}_/dev-hub)
2. Go to the **mashup editor** (on the left hand side)
3. Create a new project with your desired name
4. Choose any mashup template
5. Create these new files (using the + button on the mashup editor - right hand side of the screen)
   - main.js
   - runtime.js
   - vendors.js
   - main.css
6. Copy all of the contents of your .qext file on **devhub** to _config/react-mashup.qext_ (local directory)
7. On your local directory, rename .qext\_ to be the same as your mashup name
8. Replace all instances of _Mashup_ to be _{mashup_name}_ on _config/wbfolder.wbl_. You can also add other files you want to view on the Mashup editor such as main.js _(optional)_
9. In the **config.js** file under webpack, replace the _{server_name}_ and _{mashup_name}_ with your server name and mashup name

10. In **webpack.common.js**, change the following

    - CopyPlugin -> Change only the "_react-mashup.qext_" in **from** and **to**, to be "{mashup_name}.qext"

11. In **webpack.dev.js** and in **webpack.prod.js**, under the **HtmlWebpackPlugin** filename, replace _index.html_ with your mashup name _(e.g Mash.html)_
12. Run `npm start` and view your mashup on {server_name}/extensions/{mashup_name}/{mashup_name.html}

## Build (production)

If you want an optimised React production build, simply run `npm run build`.
Make sure you have changed the output path in **webpack/config.js**.

If you have a different production server, you must **follow Steps 1-5 again** on your production server.

## Troubleshooting

- Failed to load resources: Make sure you have manually added the files in Step 5 using the Mashup editor

## Known Limitations

- Calling the Qlik APIs using the Qlik object does not work properly on IE11
- You have to manually refresh the page every time you make a change to see your changes
