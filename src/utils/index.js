export const addKey = (data) => {
  if (!data) return data;
  data.forEach((element, index) => {
    element.key = `key_${index}`;
  });
  return data;
};

export const csvDownload = (data, csvname) => {
  const csv = json2csv(data);
  const element = document.createElement('a');
  element.href =
    'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv);
  element.setAttribute('download', csvname);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const json2csv = (json) => {
  const header = Object.keys(json[0]).join(',') + '\n';
  const body = json
    .map(function (d) {
      return Object.keys(d)
        .map(function (key) {
          key.replace('"', '""');
          return `"${d[key]}"`;
        })
        .join(',');
    })
    .join('\n');
  return header + body;
};
