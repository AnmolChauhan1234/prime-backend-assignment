from fastapi import APIRouter
import httpx

router = APIRouter()


@router.get("/crypto-price")

async def get_crypto_price():

    url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"

    async with httpx.AsyncClient() as client:

        response = await client.get(url)

    return response.json()