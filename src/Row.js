import React from 'react';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Row({block}) {

  const dayjs = require('dayjs');

  console.log(block);

  const {index, content, current_time, hash, prevHash} = block;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{dayjs(current_time).format('YYYY-MM-DD HH:mm:ss')}</td>
      <td>{content}</td>
      <td>
        <button type="button"
                className="btn btn-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top">
          {hash.toString().substring(0, 8)}
        </button>
      </td>
      <td>
        <button type="button"
                className="btn btn-success"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top">
          {prevHash.toString().substring(0, 8)}
        </button>
      </td>
    </tr>
  );
}
