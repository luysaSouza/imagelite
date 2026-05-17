import { Template, ImageCard } from '@/components'

export default function GaleriaPage() {
    return (
        <Template>
            <h1>Galeria</h1>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard nome='Paisagem' tamanho='10M' dataUpload='17/05/2026' src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?utm_source=chatgpt.com'/>
                <ImageCard nome='Estrada' tamanho='12M' dataUpload='17/05/2026' src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?utm_source=chatgpt.com'/>
                <ImageCard nome='Paisagem' tamanho='10M' dataUpload='17/05/2026' src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?utm_source=chatgpt.com'/>
                <ImageCard nome='Estrada' tamanho='12M' dataUpload='17/05/2026' src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?utm_source=chatgpt.com'/>
            </section>
        </Template>
    )
}   