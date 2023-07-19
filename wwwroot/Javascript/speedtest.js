async function testDownloadSpeed(url, fileSizeInBytes) {
    const startTime = new Date().getTime();
    const response = await fetch(url);
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000;
    const bitsLoaded = fileSizeInBytes * 8;
    const speedBps = bitsLoaded / duration;
    const speedKbps = speedBps / 1024;
    const speedMbps = speedKbps / 1024;

    return speedMbps;
}