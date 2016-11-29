<matches>
  <div class="matches__wrapper hpadding" if={ matches }>
    <table class="matches__container">
      <tbody>
        <tr each={ matches } onclick={ go_to_match }>
          <td class="min" if={ min && period != 'HT' }>{ min }'</td>
          <td class="period" if={ period == 'HT' }>{ period }</td>
          <td class="date" if={ !min && !period }>{ format_date(date, time) }</td>
          <td class="host">{ home_name }</td>
          <td class="status">
            <span if={ fixture }>{ format_time(date, time) }</span>
            <span if={ live | ended } class={ live: live }>{ ft[0] } - { ft[1] }</span>
          </td>
          <td class="away">{ away_name }</td>
        </tr>
      </tbody>
    </table>
  </div>

  <script type="coffee">
    util = require 'util'

    @format_date = util.format_date
    @format_time = util.format_time

    @go_to_match = (e) ->
      riot.route 'm/' + e.item.match_id

    @on 'mount', () =>
      @matches = @opts.matches
      @update()
  </script>

  <style type="scss">
    @import 'app/support.scss';

    $table-border-color: #ddd;

    .matches {
      &__container {
        margin-bottom: 1em;
        width: 100%;
        background: #f9f9f9;

        tbody tr {
          cursor: pointer;
          border-top: 1px solid $table-border-color;

          &:first-child {
            border-top: none;
          }
        }

        td {
          padding: 7px 4px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .min,
        .period {
          font-weight: 600;
        }

        .date {
          font-weight: 600;
        }

        .host {
          text-align: right;
        }

        .status {
          text-align: center;
          font-weight: 600;
        }

        .live {
          color: #c33;
          animation: blinker 2s linear infinite;
        }

        @keyframes blinker {
          50% { opacity: 0.3; }
        }
      }
    }
  </style>
</matches>