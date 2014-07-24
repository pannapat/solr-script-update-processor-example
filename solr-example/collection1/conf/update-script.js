function processAdd(cmd) {
  
  doc = cmd.solrDoc;  // org.apache.solr.common.SolrInputDocument
  
  var d1 = new Date(parseInt(doc.getFieldValue("lastUpdateTime")));
  lastUpdateTime = d1.toISOString();
  doc.setField("lastUpdateTime",lastUpdateTime);
  logger.info("update-script#processAdd: lastUpdateTime=" + lastUpdateTime);
  
  var d2 = new Date(parseInt(doc.getFieldValue("firstCreateTime")));
  firstCreateTime = d2.toISOString();
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
