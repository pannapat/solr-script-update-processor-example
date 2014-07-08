solr-script-update-processor-example
====================================

Example of update-script.js to convert field contains date in milliseconds to ISO-8601 date string.
E.g. Imported raw document contains "1403784614000" in "lastUpdateTime" field.
After import the lastUpdateTime's value will be converted to "2014-06-26T12:10:14.000Z".

HOW TO RUN:
====================================
1) Point your Solr to this example project using -Dsolr.solr.home option when you start, E.g.
    -Dsolr.solr.home=../<blah-blah-blah>/solr-script-update-processor-example/solr-example

2) Copy post.jar to "solr-example" directory
    Note: post.jar is from Solr package (<package_dir>/solr-4.9.0/example)

3) Run a command
    > java -Dauto -jar post.jar dataset/my_sample_data.csv


