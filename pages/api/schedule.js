import moment from "moment";
import axios from "axios";

const getUrl = (ids) =>
  `https://tv.yandex.ru/ajax/i-tv-region/get?params={"channelIds":${ids}, "duration": 926400}&resource=schedule&userRegion=213`;

export default async function handler(_, res) {
  let days = [];

  try {
    const response = await axios.get(getUrl([275]));
    const { data } = response;
    const { finish, events } = data.schedules[0];

    let current = moment();
    current.utcOffset(3)

    while (current.isBefore(finish)) {
      days.push({
        fullDate: current.toString(),
        weekDay: current.day(),
        monthDate: current.date(),
        socialDate: current.format("YYYY-MM-DD"),
        programm: [],
      });
      current = current.add(1, "days");
    }

    events.forEach((event, i) => {
      const dayIndex = days.findIndex(
        (el) => el.socialDate === event.socialDate
      );
      if (dayIndex >= 0) {
        days[dayIndex].programm.push({
          title: event?.program?.title,
          description:
            event?.program?.description.length > 80
              ? event?.program?.description.substring(0, 80 - 3) + "..."
              : event?.program?.description,
          time: moment(event.start).utcOffset(3).format("hh:mm"),
          start: event.start,
          finish: event.finish,
        });
      }
    });

    days = days.filter(day => !!day.programm.length)

    res.status(200).json({ days });
  } catch (e) {
    res.status(200).json({ error: e });
  }
}
