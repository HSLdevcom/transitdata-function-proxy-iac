module.exports = async function (context, req) {
    context.res.status(302).set("Location", "https://hsldevcom.github.io/gtfs_rt/").send()
}