$.getJSON("/JSON/motorists.json", json => {
    let motorist = '';
    $.each(json, function (_key, value) {
        motorist +=
        `<tr>
            <td>${value.person.firstname} ${value.person.lastname}</td>
            <td>${value.car.manufacturer}</td>
            <td>${value.car.model}</td>
            <td>${value.car.year}</td>
        </tr>`;
    });
    $('.table').append(motorist);
});
