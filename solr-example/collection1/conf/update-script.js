function processAdd(cmd) {
  doc = cmd.solrDoc;  // org.apache.solr.common.SolrInputDocument
  var d = new Date(parseInt(doc.getFieldValue("lastUpdateTime")));
  lastUpdateTime = d.toISOString();
  doc.setField("lastUpdateTime",lastUpdateTime);
  logger.info("update-script#processAdd: lastUpdateTime=" + lastUpdateTime);
  
  
  firstCreateTime = doc.getFieldValue("firstCreateTime");
  var d = new Date(parseInt(doc.getFieldValue("firstCreateTime")));
  firstCreateTime = d.toISOString();
  doc.setField("firstCreateTime",firstCreateTime);
  logger.info("update-script#processAdd: firstCreateTime=" + firstCreateTime);
}

function processDelete(cmd) {
  // no-op
}

function processMergeIndexes(cmd) {
  // no-op
}

function processCommit(cmd) {
  // no-op
}

function processRollback(cmd) {
  // no-op
}

function finish() {
  // no-op
}
