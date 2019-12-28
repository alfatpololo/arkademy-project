function biodata(nama , umur)
{
    var data = {
        "name": nama,
        "age": umur,
        "address": "Jl.Cempaka Baru Timur XI RT11/RW05",
        "hobbies": ["Reading", "writing", "playing"],
        "is_married": false,
        "list_school": [
            {
                "name": "SDN 05 CEMPAKA BARU",
                "year_in": "2003",
                "year_out": "2009",
                "major": null
            },

            {
                "name": "SMPN 228 JAKARTA PUSAT",
                "year_in": "2009",
                "year_out": "2012",
                "major": null
            },

            {
                "name": "Taman Siswa 2 Jakarta",
                "year_in": "2012",
                "year_out": "2015",
                "major": "Rekayasa Perangkat Lunak"
            }
        ],

        "skills": [
            {
                "skill_name": "Javascript",
                "level": "Beginner"
            }
        ],                
        "interest_in_coding": true
    }
    return data
}
console.log(biodata("alfath", "22"))